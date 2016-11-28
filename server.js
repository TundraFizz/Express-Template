var express = require("express");
var app = express();
var path = require("path");

app.set('view engine', 'ejs'); // Set the view engine to ejs

app.use("/static", express.static(__dirname + "/static")); // Define static directory
app.use(express.static(__dirname + "/html"));              // Root goes to the /html directoru

app.use(function(req, res) {
  res.sendFile(path.join(__dirname + "/html/404.html"), 404);
});

app.get("/", function(req, res) {
  // res.sendFile(path.join(__dirname + "/index.html"));
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(9001);
