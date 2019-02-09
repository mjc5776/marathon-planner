module.exports = function(sequelize, DataTypes) {
  var UserHistory = sequelize.define("UserHistory", {
    UserId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER,
    recommend: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    }
  });

  //Pass UP ID into User table
  UserHistory.associate = function(models) {
    UserHistory.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserHistory;
};
