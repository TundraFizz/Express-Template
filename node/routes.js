var app = require("../server.js");
var fs  = require("fs"); // File system library

TestingFunction = function(){
  console.log("This is a function");
}

AppendToFile = function(file, data){
  var io = data["firstName"] + "," + data["lastName"] + "," + data["age"] + "\n";
  fs.appendFileSync("data/people.csv", io);
}

CsvToObject = function(file){
  var people = [];
  var fileContents = fs.readFileSync(file);
  var lines = fileContents.toString().split("\n");

  for(var i = 0; i < lines.length; i++){
    if(lines[i]){
      var data = lines[i].split(",");
      people.push({"firstName": data[0],
                   "lastName":  data[1],
                   "age":       data[2]});
    }
  }

  return people;
}

app.post("/add-person", function(req, res){
  AppendToFile("data/people.csv", req.body);
  var people = CsvToObject("data/people.csv");
  res.json(people);
});

app.get("/", function(req, res){
  TestingFunction();

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

app.get("/about", function(req, res){
  var people = CsvToObject("data/people.csv");
  res.render("about.ejs", {people: people});
});

app.use(function (req, res){
  res.render("404.ejs");
});
