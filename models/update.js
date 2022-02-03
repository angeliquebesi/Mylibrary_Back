const connection = require('../db_config');

const updateBook = (data, id) => {
  return connection
    .promise()
    .query('UPDATE books SET ? WHERE bookid=?', [data, id])
    .then((results) => {
      return results[0];
    })
    .catch((err) => console.error(err));
};

module.exports = updateBook;
