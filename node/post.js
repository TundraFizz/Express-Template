module.exports = function(app){
  var lib = require("./func-parser.js"); // Include local libraries here

  ////////////////
  // add-person //
  ////////////////
  app.post("/add-person", function(req, res){
    lib.AppendToFile("data/people.csv", req.body);
    var people = lib.CsvToObject("data/people.csv");
    res.json(people);
  });
}
