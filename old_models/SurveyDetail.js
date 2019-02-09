module.exports = function(sequelize, DataTypes) {
  var SurveyDetail = sequelize.define("SurveyDetail", {
    SurveyId: DataTypes.INTEGER,
    QuestionId: DataTypes.INTEGER, //foriegn key from SurveyQuestion.js
    Answer: DataTypes.STRING
  });

  // //Pass UP id into Survey table
  // SurveyDetail.associate = function(models) {
  //   SurveyDetail.belongsTo(models.Survey, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  // //Pass id DOWN to many SurveyQuestion entries
  // SurveyDetail.associate = function(models) {
  //   SurveyDetail.hasMany(models.SurveyQuestion, {
  //     // as: "svDetailId",
  //     // foreignKey: "id",
  //     onDelete: "cascade"
  //   });
  // };

  return SurveyDetail;
};
