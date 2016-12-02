var helper = require("./helper.js");

module.exports = function(app){
  //////////////////////
  // POST: add-person //
  //////////////////////
  app.post("/add-person", function(req, res){
    helper.AppendToFile("data/people.csv", req.body);
    var people = helper.CsvToObject("data/people.csv");
    res.json(people);
  });
}
