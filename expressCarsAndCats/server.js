const express = require("express");
const app = express();
const path = require('path');

// app.use(express.static(__dirname + "/static"));
app.use(express.static(path.join(__dirname, "static")));

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('static', __dirname + '/static');


app.listen(8000, () => console.log("listening on port 8000"));

app.get("/users", (req, res) => {
  // hard-coded user data
  var users_array = [
      {name: "Michael", email: "michael@codingdojo.com"}, 
      {name: "Jay", email: "jay@codingdojo.com"}, 
      {name: "Brendan", email: "brendan@codingdojo.com"}, 
      {name: "Andrew", email: "andrew@codingdojo.com"}
  ];
  
  res.render('users', {users: users_array});
})

app.get('/', (req, res) => {
  res.render('cars')
});

app.get("/cars", (req, res) => {

  res.render('cars');
});

app.get("/cats", (req, res) => {

  res.render('cats');
});

app.get("/cars/new", (req, res) => {

  res.render('addcar');
});


app.get("/users", (req, res) => {
  // hard-coded user data
  var users_array = [
      {name: "Michael", email: "michael@codingdojo.com"}, 
      {name: "Jay", email: "jay@codingdojo.com"}, 
      {name: "Brendan", email: "brendan@codingdojo.com"}, 
      {name: "Andrew", email: "andrew@codingdojo.com"}
  ];
  
  res.render('users', {users: users_array});
})

app.get("/cats/info/1", (req, res) => {
  
  const cats = [
    { name: "Nala", favfood: "Cheese", age: 2, sleepspot: ["Desk chair", "Foot of bed"], pic: "/images/cat1.jpeg" },
  ];

  const context = { catInfo: cats };
  
  res.render('catinfo', context);

});

app.get("/cats/info/2", (req, res) => {
  
  const cats = [
    { name: "Simba", favfood: "Grubs", age: 3, sleepspot: ["Rock", "Hard place"], pic: "/images/cat2.jpeg" },
  ];

  const context = { catInfo: cats };
  
  res.render('catinfo', context);

});

app.get("/cats/info/3", (req, res) => {
  
  const cats = [
    { name: "Tardar Sauce (AKA Grumpy Cat)", favfood: "Meh", age: "Too old for this", sleepspot: ["Couch", "Windowsill "], pic: "/images/grumpy.jpeg" },
  ];

  const context = { catInfo: cats };
  
  res.render('catinfo', context);

});