const connection = require('../db_config');

const findAll = () => {
  const query =
    'SELECT b.id AS bookid, b.author, b.publishdate, b.summary, b.couverture, b.categories_id FROM books AS b INNER JOIN categories AS c ON b.categories_id = c.id ORDER BY bookid';
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

module.exports = findAll;
