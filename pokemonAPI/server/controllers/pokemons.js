const mongoose = require('mongoose');

const Pokemon = mongoose.model('Pokemon');

module.exports = {
  index(_, res) {
    Pokemon.find()
      .then(allPokes => res.json({
        pokemon: allPokes,
        msg: 'Gotta Catch Em All'
      }))
      .catch(err => {
        res.json({ error: err });
      });
  },

  create(req, res) {
    Pokemon.create(req.body)
      .then(newPokemon => {
        res.json({ pokemon: newPokemon });
      })
      .catch(err => {
        res.json({ error: err });
      });
  },

  update(req, res) {
    Pokemon.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        runValidators: true,
        new: true
      }
    )
      .then(newPokemon => {
        res.json({ pokemon: newPokemon });
      })
      .catch(err => {
        res.json({ error: err });
      });
  },

  getById(req, res) {
    Pokemon.findById(req.params.pokeId)
      .then(thisPokemon => {
        res.json({ pokemon: thisPokemon });
      })
      .catch(err => {
        res.json({ error: err });
      });
  },

  delete(req, res) {
    Pokemon.findByIdAndDelete(req.params.id)
      .then(deletedPoke => {
        res.json({ deleted: deletedPoke });
      })
      .catch(err => {
        res.json({ error: err });
      });
  },

}