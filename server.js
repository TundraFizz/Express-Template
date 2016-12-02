var bodyParser = require("body-parser");          // Allows you to read POST data
var express    = require("express");              // Express
var fs         = require("fs");                   // File system library
var app        = express();                       // Define the application
app.use(bodyParser.urlencoded({extended: true})); // Setting for bodyParser
app.use(bodyParser.json());                       // Setting for bodyParser
app.use(express.static(__dirname + "/static"));   // Define the static directory
app.set("views", __dirname + "/views");           // Define the views directory
// app.set("view engine", "ejs");                    // Set the view engine to ejs

///////////
// Index //
///////////
app.get("/", function(req, res){
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

//////////////////////
// POST: add-person //
//////////////////////
app.post('/add-person', function(req, res){
  AppendToFile("data/people.csv", req.body);
  var people = CsvToObject("data/people.csv");
  res.json(people);
});

//////////////////////////////////
// 404: No route or file exists //
//////////////////////////////////
app.use(function (req, res){
  res.render("404.ejs");
});

//////////////////////
// Helper Functions //
//////////////////////

function AppendToFile(file, data){
  var io = data["firstName"] + "," + data["lastName"] + "," + data["age"] + "\n";
  fs.appendFileSync("data/people.csv", io);
}

function CsvToObject(file){
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

//////////////////////
// Start the server //
//////////////////////
app.listen(9001);
