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

  UserPreference.associate = function(models) {
    UserPreference.belongsTo(models.Genres, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  //Pass id DOWN as FK to many MoviePreference entries
  //UserPreference.associate = function(models) {
  //UserPreference.hasMany(models.MoviePreference, {
  //// as: "prefId",
  //// foreignKey: "id",
  //onDelete: "cascade"
  //});
  //};

  return UserPreference;
};
