const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pokemon_api', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


require('../models/pokemon');