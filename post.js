module.exports = function(app){
  ////////////////
  // add-person //
  ////////////////
  app.post("/add-person", function(req, res){
    AppendToFile("data/people.csv", req.body);
    var people = CsvToObject("data/people.csv");
    res.json(people);
  });
}
