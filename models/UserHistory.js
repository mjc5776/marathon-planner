module.exports = function(sequelize, DataTypes) {
  var UserHistory = sequelize.define("UserHistory", {
    UserId: DataTypes.INTEGER,
    omdbId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
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
