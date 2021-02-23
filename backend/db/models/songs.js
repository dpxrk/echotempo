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
    Song.hasMany(models.Like, { foriengKey: "songId" });
    Song.belongsTo(models.Playlist, { foreignkey: "songId" });
  };
  return Song;
};
