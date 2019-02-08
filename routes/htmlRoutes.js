var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(
      dbExample
    ) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

//var movie = $("#movie-input").val();
//var queryURL =
  //"https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";

//$.ajax({
 // url: queryURL,
  //method: "GET"
//}).then(function(response) {
 // $("#movie-view").text(JSON.stringify(response));
//});
