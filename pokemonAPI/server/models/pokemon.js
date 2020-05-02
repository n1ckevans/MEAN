const mongoose = require('mongoose');

const PokemonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  
}, { timestamps: true });

mongoose.model('Pokemon', PokemonSchema);