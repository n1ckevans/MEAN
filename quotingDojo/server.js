const path = require('path');
const express = require('express');
const app = express();



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/client/views'));
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose');


require('./server/config/routes')(app);


// mongoose.connect('mongodb://localhost/quoting_dojo', {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
// });

// app.get('/', (req, res) => {
  
//   Quote.find()
//     .then(allQuotes => res.render('index', { quotes: allQuotes }))
//     .catch(err => {
//       console.log(err);

//       res.render('index', { quotes: [] })
//     });
// });

// // req.body is the info from the form inputs
// // .then is not needed here because we just want to
// // redirect to index no matter what
// // finally runs whether there is an error or not
// app.post('/quote', (req, res) => {

//   Quote.create(req.body)
//     .catch(err => console.log(err))
//     .finally(() => res.redirect('/'));
// });

app.listen(3000, () => console.log('listening on port 3000'));