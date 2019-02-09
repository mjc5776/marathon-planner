// PASSPORT: This is the user model for Passport Authentication.  You can tighten up the validation if needed.
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    firstname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    lastname: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    username: {
      type: DataTypes.TEXT
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastLogin: {
      type: DataTypes.DATE
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
