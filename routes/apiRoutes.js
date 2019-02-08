var db = require("../models");

module.exports = function(app) {
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
//An edit