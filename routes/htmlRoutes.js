const db = require("../models");

module.exports = app => {
  // Load index page
  app.get("/", (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      // PASSPORT: checks to see if the user is logged in.  If so then render conditional handlebars via logout render true/false
      let logout = false;
      if (req.user) {
        logout = true;
      }
      res.render("index", {
        msg: "Welcome To Movie Planner!",
        // PASSPORT: logout will be true or false if user is logged in
        logout: logout,
        examples: dbExamples
      });
    });
  });




  app.get("/history", (req, res) => {
    db.Example.findAll({}).then(dbExamples => {
      // PASSPORT: checks to see if the user is logged in.  If so then render conditional handlebars via logout render true/false
      let logout = false;
      if (req.user) {
        logout = true;
      }
      res.render("history", {
        
        // PASSPORT: logout will be true or false if user is logged in
        logout: logout,
        examples: dbExamples
      });
    });
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", (req, res) => {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(dbExample => {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
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
