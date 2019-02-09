module.exports = function(sequelize, DataTypes) {
  var Genre = sequelize.define("Genre", {
    genre: DataTypes.STRING,
    gerneId: DataTypes.INTEGER
  });

  //Pass genre id to User Preferences
  Genre.associate = function(models) {
    Genre.belongsTo(models.UserPreference, {
      foreignKey: {
        allowNull: false
      }
    });
  };
return Genre;
};
