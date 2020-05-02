const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');

const modelsPath = path.join(__dirname, '../models');

fs.readdirSync(modelsPath).forEach(file => {
  if (file.includes('.js')) {
    require(path.join(modelsPath, file));
  }
});

mongoose.connect('mongodb://localhost/mongoose_dashboard', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});