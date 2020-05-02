const productController = require('../controllers/products');

module.exports = function (app) {
  app.get('/api/products', productController.all);
  app.get('/api/products/:id', productController.getOne);
  app.post('/api/products', productController.create);
  app.delete('/api/products/:id', productController.delete);
  app.put('/api/products/:id', productController.update);
}