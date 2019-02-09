module.exports = function(sequelize, DataTypes) {
  var Survey = sequelize.define("Survey", {
    UserId: DataTypes.INTEGER //Do we need this one?
    //The other two collumns are Date, and Time of survey. Those are tracked automatically by sequelize, I believe.
  });

  //Pass UP id into UserHistory table
  // Survey.associate = function(models) {
  //   Survey.belongsTo(models.UserHistory, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  // //Pass id DOWN to many SurveyDetail entries
  // Survey.associate = function(models) {
  //   Survey.hasMany(models.SurveyDetail, {
  //     // as: "surveyId",
  //     // foreignKey: "id",
  //     onDelete: "cascade"
  //   });
  // };

  return Survey;
};
