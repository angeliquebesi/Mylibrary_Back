const router = require('express').Router();
const deleteOne = require('../models/deleteOne');
const findAll = require('../models/findAll');
const findOne = require('../models/findOne');

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

router.delete('/:id', (req, res) => {
  deleteOne(req.params.id)
    .then(res.status(200).send('Book delete'))
    .catch((err) => {
      console.error(err);
      res.status(500).send('Book not deleted');
    });
});

module.exports = router;
