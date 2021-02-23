"use strict";
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    "Song",
    {
      userId: { allowNull: false, type: DataTypes.STRING },
      title: { allowNull: false, type: DataTypes.STRING },
      audiofile: { allowNull: false, type: DataTypes.STRING },
    },
    {}
  );
  Song.associate = function (models) {
    Song.hasMany(models.Comment, { foreignKey: "songId" });
    Song.belongsToMany(models.User, { through: "Like", foreignKey: "songId" });
    Song.belongsToMany(models.Playlist, {
      through: "Playlist_Song",
      foreignkey: "songId",
    });
    Song.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Song;
};
