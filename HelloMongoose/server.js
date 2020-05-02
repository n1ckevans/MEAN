  
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/hello_mongoose', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

const UserSchema = new mongoose.Schema({
  name: String,
  age: Number
 })
 // create an object to that contains methods for mongoose to interface with MongoDB
 const User = mongoose.model('User', UserSchema);


 app.get('/', (req, res) => {  
  User.find()
      .then(data => res.render("index", {users: data}))
      .catch(err => res.json(err));
});

 app.post('/users', (req, res) => {
  const user = new User();
  user.name = req.body.name;
  user.age = req.body.age;
  user.save()
    .then(newUserData => console.log('user created: ', newUserData))
    .catch(err => console.log(err));
   
  res.redirect('/');
})

app.listen(3000, () => console.log('listening on port 3000'));