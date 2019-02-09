module.exports = function(sequelize, DataTypes) {
  var Genres = sequelize.define("Genres", {
    genre: DataTypes.STRING
  });

  return Genres;
};
