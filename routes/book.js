const router = require('express').Router();
const { getOneBook } = require('../middleware/book');
const { validateData, createOne } = require('../models/CreateOne');
const deleteOne = require('../models/deleteOne');
const findAll = require('../models/findAll');
const findOne = require('../models/findOne');
const updateBook = require('../models/update');

router.get('/', (req, res) => {
  findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Books not found');
    });
});

router.get('/:id', (req, res) => {
  findOne(req.params.id)
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Book not found');
    });
});

router.delete('/:id', getOneBook, (req, res) => {
  deleteOne(req.params.id)
    .then(res.status(200).send('Book delete'))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Book not deleted');
    });
});

router.put('/:id', getOneBook, (req, res) => {
  updateBook(req.body, req.params.id)
    .then(() => {
      req.book = { ...req.book, ...{ statut: req.body.selectStatut } };
      res.status(200).json(req.book);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Book not update');
    });
});

router.post('/', (req, res) => {
  const error = validateData(req.body);
  if (error) {
    res.status(422).json({ validationErrors: error.details });
  } else {
    createOne(req.body)
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        console.error(err);
        res.send('Error saving the book');
      });
  }
});

module.exports = router;
