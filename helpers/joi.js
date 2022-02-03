const Joi = require('joi');

const putDataBook = () => {
  return Joi.object({
    statut: Joi.string().required(),
  });
};

const validateputData = (data) => {
  return new Promise((resolve, reject) => {
    (async () => {
      try {
        const validate = Object.keys(data).map((key) => {
          return putDataBook[key].validateAsync(data[key]);
        });
        await Promise.all(validate);
        resolve(true);
      } catch (error) {
        reject(error);
      }
    })();
  });
};

module.exports = { putDataBook, validateputData };
