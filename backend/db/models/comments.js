"use strict";
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      userId: { allowNull: false, type: DataTypes.STRING },
      songId: { allowNull: false, type: DataTypes.INTEGER },
      content: { allowNull: false, type: DataTypes.STRING },
    },
    {}
  );
  Comment.associate = function (models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Song, { foreignKey: "songId" });
  };
  return Comment;
};
