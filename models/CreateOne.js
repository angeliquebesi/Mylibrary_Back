const Joi = require('joi');
const connection = require('../db_config');

const validateData = (data) => {
  return Joi.object({
    title: Joi.string().max(255).required(),
    author: Joi.string().max(255).required(),
    publishdate: Joi.number(),
    summary: Joi.string(),
    couverture: Joi.string().max(255),
  }).validate(data, { abortEarly: false }).error;
};
const createOne = ({ title, author, summary, couverture, publishdate }) => {
  return connection
    .promise()
    .query(
      'INSERT INTO books (title, author, summary, couverture, publishdate) VALUES (?,?,?,?,?)',
      [title, author, summary, couverture, publishdate]
    )
    .then(([results]) => {
      const bookid = results.insertId;
      return { bookid, title, author, summary, couverture, publishdate };
    })
    .catch((err) => console.error(err));
};

module.exports = { createOne, validateData };
