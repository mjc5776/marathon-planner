const db = require("../models");

module.exports = function(app) {
  //------- User API's --------------
  //Create new user
  app.post("/api/newuser/", function(req, res) {
    db.User.create({
      FirstName: req.body.firstname,
      LastName: req.body.lastname,
      EmailAddress: req.body.email,
      AuthId: req.body.authid //Need to grap this value from AuthO. Check with Mike S. on how AuthO works.
    }).then(function(user) {
      console.log(user);
      res.json(user);
    });
  });

  //Get all users
  app.get("/api/users", function(req, res) {
    db.User.findAll({}).then(function(user) {
      console.log(user);
      res.json(user);
    });
  });

  //Get user history
  app.get("/api/history/:id", function(req, res) {
    db.UserHistory.findAll({
      where: {
        UserId: req.params.id
      }
    }).then(function(history) {
      console.log(history);
      res.json(history);
    });
  });

  //Post user history
  app.post("/api/history/:user/:movie/:recommend", function(req, res) {
    db.UserHistory.create({
      UserId: parseInt(req.params.user),
      movieId: parseInt(req.params.movie),
      recommend: parseInt(req.params.recommend)
    }).then(function(result) {
      res.json(result);
    });
  }); 

  //Get current user
  app.get("/api/user/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(user) {
      res.json(user);
    });
  });

  //Post user preferences
  app.post("/api/pref/:userId/:genrefId", function(req, res) {
    db.UserPreference.create({
      UserId: req.params.userId,
      GenreId: req.params.genreId
    }).then(function(result) {
      res.json(result);
    });
  });

  //Get Movie Genres
  app.get("/preference", function(req, res) {
    db.Genre.findAll({}).then(function(data) {
      var hbsObject = {
        genres: data
      };
      res.render("preference", hbsObject) 
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", (req, res) => {
    db.Example.destroy({ where: { id: req.params.id } }).then(dbExample => {
      res.json(dbExample);
    });
  });
};






