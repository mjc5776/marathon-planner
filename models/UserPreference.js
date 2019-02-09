module.exports = function(sequelize, DataTypes) {
  var UserPreference = sequelize.define("UserPreference", {
    UserId: DataTypes.INTEGER,
    MoviePrefId: DataTypes.INTEGER
  });

  //Pass UP ID into User table
  UserPreference.associate = function(models) {
    UserPreference.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return UserPreference;
};
