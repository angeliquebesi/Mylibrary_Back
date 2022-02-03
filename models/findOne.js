const connection = require('../db_config');

const findOne = (id) => {
  console.log(id);
  return connection
    .promise()
    .query(
      'SELECT b.id AS bookid, b.author, b.publishdate, b.summary, b.couverture, b.categories_id FROM books AS b INNER JOIN categories AS c ON b.categories_id = c.id WHERE b.id = ? ',
      [id]
    )
    .then((results) => {
      return results[0];
    })
    .catch((err) => console.error(err));
};

module.exports = findOne;
