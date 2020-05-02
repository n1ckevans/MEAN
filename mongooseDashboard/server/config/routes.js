const dogController = require('../controllers/dogs.js');

module.exports = function (app) {
  app.get('/', dogController.index);
  app.get('/new', dogController.new);
  app.get('/info/:id', dogController.info);
  app.get('/edit/:id', dogController.edit);
  app.get('/delete/:id', dogController.delete);
  app.post('/create', dogController.create);
  app.post('/update/:id', dogController.update);
}