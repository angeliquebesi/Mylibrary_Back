const connection = require('../db_config');

const findAll = () => {
  const query =
    'SELECT * FROM books INNER JOIN categories AS c ON books.categories_id = c.id ORDER BY bookid';
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
