const path = require('path');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/client/views'));
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose');
require('./server/config/routes')(app);

app.listen(3000, () => console.log('listening on port 3000'));