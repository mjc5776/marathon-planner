var db = require("../models");

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

  //Get current user
  app.get("/api/user/:id", function(req, res) {
    db.User.findAll({})
    .then(function(user) {
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

  //----- Survey API's -----

  //Get Survey Questions
  app.get("/api/questions/", function(req, res) {
    db.SurveyQuestion.findAll({})
   .then(function(questions) {
      console.log(questions);
    res.json(questions);
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
  app.post("/api/pref/:userId/:prefId", function(req, res) {
    db.UserPreference.create({
      UserId: req.params.userId,
      MoviePrefId: req.params.prefId
    }).then(function(result) {
      res.json(result);
    });
  });

  //Get SurveyDetail
  app.get("/api/sdetail/:surveyId/:questionId/:answer", function(req, res) {
    db.SurveyDetail.findAll({
      where: {
        SurveyId: req.params.surveyId,
        QuestionId: req.params.surveyId,
        Answer: req.params.answer
      }
    }).then(function(result) {
      res.json(result);
    });
  });

  //http://www.omdbapi.com/?apikey=trilogy&t=Captain+Marvel&y=2019
};
