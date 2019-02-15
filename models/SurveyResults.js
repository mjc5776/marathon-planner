module.exports = function (sequelize, DataTypes) {
  var SurveyResults = sequelize.define('SurveyResults', {
    SurveyId: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    Rating: DataTypes.INTEGER,
    Comments: DataTypes.STRING
  });
  return SurveyResults;
};
