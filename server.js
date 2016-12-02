var bodyParser = require("body-parser");          // Allows you to read POST data
var express    = require("express");              // Express
var app        = express();                       // Define the application
app.use(bodyParser.urlencoded({extended: true})); // Setting for bodyParser
app.use(bodyParser.json());                       // Setting for bodyParser
app.use(express.static("./static"));              // Define the static directory
app.set("views", "./views");                      // Define the views directory

require("./post.js")(app);                        // Include POST requests first
require("./routes.js")(app);                      // Include web routes second
require("./routes-404.js")(app);                  // Include 404 page last

app.listen(9001);                                 // Start the server
