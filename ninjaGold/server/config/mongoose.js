const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/ninja_gold', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

require('../models/ninja');