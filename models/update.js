const connection = require('../db_config');

const updateBook = (data, id) => {
  return connection
    .promise()
    .query('UPDATE books SET ? WHERE bookid = ?', [
      { statut: data.selectStatut },
      id,
    ])
    .then((results) => {
      return results;
    })
    .catch((err) => console.error(err));
};

module.exports = updateBook;
