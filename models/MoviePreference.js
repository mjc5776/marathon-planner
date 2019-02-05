module.exports = function(sequelize, DataTypes) {
    var MoviePreference = sequelize.define("MoviePreference", {
      MovieTitle: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      MovieType: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      MovieYear: DataTypes.INTEGER,
    });

    //Pass UP id into UserPreference table
    MoviePreference.associate = function(models) {
      MoviePreference.belongsTo(models.UserPreference, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return MoviePreference;
  };