const router = require('express').Router();
const findAll = require('../models/findAll');

router.get('/', (req, res) => {
  console.log('hello');
  findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

module.exports = router;
