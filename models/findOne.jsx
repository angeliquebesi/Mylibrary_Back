const connection = require('../db_config');

const findOne = (id) => {
  const query =
    'SELECT * FROM books INNER JOIN categories ON books.categories_id = categories.id WHERE books.id= ?', [id];
  const sqlValues = [];
  return connection
    .promise()
    .query(query, sqlValues)
    .then((results) => {
      console.log(results[0]);
      return results;
    })
    .catch((err) => console.error(err));
};

module.exports = findOne;
