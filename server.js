var express = require("express");               // Require express
var app = express();                            // Define app
app.use(express.static(__dirname + "/static")); // Define the static directory
app.set("views", __dirname + "/views");         // Define the views directory
app.set("view engine", "ejs");                  // Set the view engine to ejs

// POST
app.post('/customers', function(req, res) {
  var customers = [{firstName:'Peter', lastName: 'Pan', age:13},{firstName:'Captain', lastName:'Hook', age:35}];
  res.json(customers);
});

// Index
app.get("/", function(req, res) {
  var people = [
    {name: "Adam", age: 10},
    {name: "Bob",  age: 12},
    {name: "Carl", age: 15}
  ];
  var string = "This is a string that was defined on the server and passed to the client.";

  res.render("pages/index.ejs", {
    people: people,
    string: string
  });
});

// About
app.get("/about", function(req, res) {
  res.render("pages/about.ejs");
});

// 404: No route or file exists
app.use(function (req, res) {
  res.render("pages/404.ejs");
});

app.listen(9001);
