"use strict";

const playlist_songs = require("./playlist_songs");

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
    Playlist.belongsToMany(models.Song, {
      through: "Playlist_Song",
      foreignKey: "playlistId",
    });
  };
  return Playlist;
};
