
// global._ = require("./helper.js");
// console.log(global._);
// var global.hi = "Yolo";
// console.log(global.hi);
// console.log(hi);
// console.log(TEST);

module.exports = function(app){
  var helper = require("./helper.js");
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
    var people = CsvToObject("data/people.csv");
    res.render("about.ejs", {people: people});
  });
}
