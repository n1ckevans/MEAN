const quotesController = require('../controllers/quotes');

module.exports = function (app) {
  app.get('/', quotesController.index);
  app.post('/quote', quotesController.create);
}