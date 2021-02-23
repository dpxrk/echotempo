"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Playlist_Songs",
      [
        {
          songId: 1,
          playlistId: 1,
        },
        {
          songId: 2,
          playlistId: 1,
        },
        {
          songId: 3,
          playlistId: 1,
        },
        {
          songId: 4,
          playlistId: 1,
        },
        {
          songId: 5,
          playlistId: 1,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Playlist_Songs", null, {});
  },
};
