const bookRouter = require('./book');

const setupApp = (app) => [app.use('book', bookRouter)];

module.exports = { setupApp };
