var app = require("../server.js");
var db  = require("../server.js").db;
var fs  = require("fs"); // File system library

app.post("/add-person", function(req, res){
  AppendToFile("data/people.csv", req.body);
  var people = CsvToObject("data/people.csv");
  res.json(people);
});

app.get("/", async function(req, res){
  var string = "A string from the server.";
  var [people] = await db.query("SELECT string FROM sample");

  res.render("index.ejs", {
    people: people,
    string: string
  });
});

app.get("/about", function(req, res){
  var people = CsvToObject("data/people.csv");
  res.render("about.ejs", {people: people});
});

app.use(function (req, res){
  res.render("404.ejs");
});
