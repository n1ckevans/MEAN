const pokeController =  require('../controllers/pokemons');

module.exports = function (app) {
  app.get('/api/pokemon', pokeController.index);
  app.post('/api/pokemon', pokeController.create);
  app.put('/api/pokemon/:id', pokeController.update);
  app.get('/api/pokemon/:pokeId', pokeController.getById);
  app.delete('/api/pokemon/:id', pokeController.delete);
}