module.exports = function(sequelize, DataTypes) {
  var Genre = sequelize.define("Genre", {
    genre: DataTypes.STRING,
    genreId: DataTypes.INTEGER
  });

  // //Pass genre id to User Preferences
  Genre.associate = function(models) {
    Genre.hasMany(models.UserPreference);
  };
return Genre;
};
