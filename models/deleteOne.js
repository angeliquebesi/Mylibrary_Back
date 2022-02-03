const connection = require('../db_config');

const deleteOne = (id) => {
  return connection
    .promise()
    .query('DELETE FROM books WHERE bookid= ?', [id])
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err));
};

module.exports = deleteOne;
