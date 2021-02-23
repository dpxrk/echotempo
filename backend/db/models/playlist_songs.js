"use strict";
module.exports = (sequelize, DataTypes) => {
  const Playlist_Song = sequelize.define(
    "Playlist_Song",
    {
      songId: DataTypes.INTEGER,
      playlistId: DataTypes.INTEGER,
    },
    {}
  );
  Playlist_Song.associate = function (models) {
    Playlist_Song.belongsTo(models.Song, { foreignKey: "songId" });
    Playlist_Song.belongsTo(models.Playlist, { foreignKey: "playlistId" });
  };
  return Playlist_Song;
};
