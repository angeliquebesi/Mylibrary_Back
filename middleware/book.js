const findOne = require('../models/findOne');

const getOneBook = (req, res, next) => {
  findOne(req.params.id)
    .then((result) => {
      if (result[0]) {
        req.book = { ...result[0] };
        next();
      } else {
        res.status(400).send("Book doesn't exist");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send('Book not found');
    });
};

module.exports = { getOneBook };
