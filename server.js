var express = require("express");
var app = express();
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 3000;

var routes = require("./controllers/burgers_controllers.js");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});
