var fs = require("fs"); // File system library

Omnom = function(yolo){
    console.log(yolo);
}

// AppendToFile(file, data){
//   var io = data["firstName"] + "," + data["lastName"] + "," + data["age"] + "\n";
//   fs.appendFileSync("data/people.csv", io);
// }

// /////////////////
// // CsvToObject //
// /////////////////
// CsvToObject(file){
//   var people = [];
//   var fileContents = fs.readFileSync(file);
//   var lines = fileContents.toString().split("\n");

//   for(var i = 0; i < lines.length; i++){
//     if(lines[i]){
//       var data = lines[i].split(",");
//       people.push({"firstName": data[0],
//                    "lastName":  data[1],
//                    "age":       data[2]});
//     }
//   }

//   return people;
// }

module.exports = function(app){
  // var lib = require("./func-parser.js"); // Include local libraries here

  ///////////
  // Index //
  ///////////
  app.get("/", function(req, res){
    Omnom("Hello there yolo swag!");
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
