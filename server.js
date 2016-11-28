var express = require("express");
var app = express();

// var path = require("path");
app.use(express.static(__dirname + "/static")); // Define the static directory

app.set("views", __dirname + "/views")
app.set("view engine", "ejs"); // Set the view engine to ejs


// app.use(function(req, res) {
//   // res.render("pages/404.ejs");
//   // res.sendFile(path.join(__dirname + "/views/pages/404.ejs"), 404);
// });

app.get("/", function(req, res) {
//res.sendFile(path.join(__dirname + "/index.html"));
  // res.render("pages/index.ejs");
  var drinks = [
      { name: "Bloody Mary", drunkness: 3 },
      { name: "Martini", drunkness: 5 },
      { name: "Scotch", drunkness: 10 }
  ];
  var tagline = "Any code of your own that you haven't looked at for six or more months might as well have been written by someone else.";

  res.render("pages/index", {
      drinks: drinks,
      tagline: tagline
  });
});

app.listen(9001);
