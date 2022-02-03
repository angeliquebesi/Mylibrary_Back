const router = require('express').Router();
const findAll = require('../models/findAll');
const findOne = require('../models/findOne');

router.get('/', (res) => {
  findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.get('/:id', (req, res) => {
  findOne(req.params.id)
    .then((result) => res.json(result))
    .catch((err) => console.error(err));
});

module.exports = router;
