module.exports = function (sequelize, DataTypes) {
  var Genre = sequelize.define('Genre', {
    genre: DataTypes.STRING,
    genreId: DataTypes.INTEGER,
    image: DataTypes.STRING
  });

  // //Pass genre id to User Preferences
  Genre.associate = function (models) {
    Genre.hasMany(models.UserPreference);
  };
  return Genre;
};
