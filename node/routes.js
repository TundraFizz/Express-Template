module.exports = function(app){
  var lib = require("./func-parser.js"); // Include local libraries here

  ///////////
  // Index //
  ///////////
  app.get("/", function(req, res){
    console.log("index");
    var string = "A string from the server.";
    var people = [
      {name: "Adam", age: 10},
      {name: "Bob",  age: 12},
      {name: "Carl", age: 15}
    ];

    res.render("index.ejs", {
      people: people,
      string: string
    });
  });

  ///////////
  // About //
  ///////////
  app.get("/about", function(req, res){
    GlobalTestingFunction();
    var people = lib.CsvToObject("data/people.csv");
    res.render("about.ejs", {people: people});
  });
}
