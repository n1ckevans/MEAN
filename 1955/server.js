const path = require('path');
const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost/1955', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});


const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
}, { timestamps: true });



const Person = mongoose.model('Person', PersonSchema);

app.get('/', (_, res) => {
  Person.find()
    .then(persons => res.json(persons))
    .catch(err => res.json(err));
});

app.get('/new/:name/', (req, res) => {
  console.log(req.params.name);
  Person.create(req.params)
    .catch(err => console.log(err))
    .finally(() => res.redirect('/'));
});

app.get('/remove/:name/', (req, res) => {
  Person.deleteOne({ name: req.params.name })
    .catch(err => console.log(err))
    .finally(() => res.redirect('/'));
});

app.get('/:name/', (req, res) => {
  Person.find({ name: req.params.name })
    .then(persons => res.json(persons))
    .catch(err => res.json(err));
});

app.listen(3000, () => console.log('listening on port 3000'));