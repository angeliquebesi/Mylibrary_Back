const router = require('express').Router();

router.get('/', (req, res) => {
  console.log(req, res);
  console.log('hello');
});
