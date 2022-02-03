const connection = require('../db_config');

const findAll = () => {
  const query = 'SELECT * FROM books';
  const sqlValues = [];
  return connection
    .promise()
    .query(query, sqlValues)
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err));
};

module.exports = findAll;
