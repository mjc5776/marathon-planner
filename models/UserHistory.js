module.exports = function(sequelize, DataTypes) {
  var UserHistory = sequelize.define("UserHistory", {
    UserId: DataTypes.INTEGER,
    TitleYear: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    SurveyId: DataTypes.INTEGER
  });

  //Pass UP ID into User table
  UserHistory.associate = function(models) {
    UserHistory.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  //Pass id DOWN as FK to many Survey entries
  UserHistory.associate = function(models) {
    UserHistory.hasMany(models.Survey, {
      // as: "histId",
      // foreignKey: "id",
      onDelete: "cascade"
    });
  };

  return UserHistory;
};
