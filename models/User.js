module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    FirstName: DataTypes.TEXT,
    LastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    EmailAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    AuthId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  //Pass DOWN id into UserHistory and UserPrecerence table
  User.associate = function(models) {
    User.hasOne(models.UserPreference, {
      // as: "userId",
      // foreignKey: "id",
      onDelete: "cascade"
    });

    User.hasOne(models.UserHistory, {
      // as: "userId",
      // foreignKey: "id",
      onDelete: "cascade"
    });
  };

  return User;
};
