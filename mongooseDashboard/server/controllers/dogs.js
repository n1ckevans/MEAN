const Dog = require('mongoose').model('Dog');

module.exports = {
  index(_, res) {
    Dog.find()
      .then(allDogs => res.render('index', { dogs: allDogs }))
      .catch(err => {
        console.log(err);

        res.render('index', { dogs: [] })
      });
  },

  create(req, res) {
    Dog.create(req.body)
      .catch(err => console.log(err))
      .finally(() => res.redirect('/'));
  },

  new(_, res) {
    res.render('new')
  },

  info(req, res) {
    Dog.findOne({ _id: req.params.id })
      .then(dogInfo => res.render('info', { dog: dogInfo }))
      .catch(err => {
        console.log(err);
      });
  },

  edit(req, res) {
    Dog.findOne({ _id: req.params.id })
      .then(dogInfo => res.render('edit', { dog: dogInfo }))
      .catch(err => {
        console.log(err);
      });
  },

  update(req, res) {
    Dog.update({ _id: req.params.id }, req.body)
      .catch(err => console.log(err))
      .finally(() => res.redirect('/'));
  },

  delete(req, res) {
    Dog.deleteOne({ _id: req.params.id })
      .catch(err => console.log(err))
      .finally(() => res.redirect('/'));
  },
}