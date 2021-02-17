"use strict";
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    "Users",
    {
      id: { allowNull: false, type: DataTypes.INTEGER },
      username: { allowNull: false, type: DataTypes.STRING },
      email: { allowNull: false, type: DataTypes.STRING },
      hashedPassword: { allowNull: false, type: DataTypes.STRING },
    },
    {}
  );
  Users.associate = function (models) {
    // associations can be defined here
  };
  return Users;
};
