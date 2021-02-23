"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    "Likes",
      [
        {
          songId: 1,
          userId: 2,
        },
        {
          songId: 2,
          userId: 2,
        },
        {
          songId: 3,
          userId: 3,
        },
        {
          songId: 4,
          userId: 4,
        },
        {
          songId: 5,
          userId: 5,
        },
        {
          songId: 6,
          userId: 6,
        },
      ];
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Likes", null, {});
  },
};
