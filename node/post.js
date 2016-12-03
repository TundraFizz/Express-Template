module.exports = function(app){
  //////////////////////////////////
  // Include local libraries here //
  //////////////////////////////////
  var lib = require("./func-parser.js");

  ////////////////
  // add-person //
  ////////////////
  app.post("/add-person", function(req, res){
    lib.AppendToFile("data/people.csv", req.body);
    var people = lib.CsvToObject("data/people.csv");
    res.json(people);
  });
}
