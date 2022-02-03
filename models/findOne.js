const connection = require('../db_config');

const findOne = (id) => {
  return connection
    .promise()
    .query(
      'SELECT * FROM books INNER JOIN categories AS c ON books.categories_id = c.id WHERE bookid = ?',
      [id]
    )
    .then((results) => {
      return results[0];
    })
    .catch((err) => console.error(err));
};

module.exports = findOne;
