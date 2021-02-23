"use strict";
module.exports = (sequelize, DataTypes) => {
  const Playlist = sequelize.define(
    "Playlist",
    {
      title: { allowNull: false, type: DataTypes.STRING },
      songId: { allowNull: false, type: DataTypes.INTEGER },
      userId: { allowNull: false, type: DataTypes.INTEGER },
    },
    {}
  );
  Playlist.associate = function (models) {
    Playlist.belongsTo(models.User, { foriegnKey: "userId" });
    Playlist.hasMany(models.Song, { foreignKey: "songId" });
  };
  return Playlist;
};
