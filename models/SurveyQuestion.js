module.exports = function(sequelize, DataTypes) {
  var SurveyQuestion = sequelize.define("SurveyQuestion", {
    QuestionId: DataTypes.INTEGER,
    Question: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  //Pass UP id into SurveyDetail table
  SurveyQuestion.associate = function(models) {
    SurveyQuestion.belongsTo(models.SurveyDetail, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return SurveyQuestion;
};
