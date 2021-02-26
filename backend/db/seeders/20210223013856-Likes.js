"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Likes", [
      {
        userId: 2,
        songId: 1,
      },
      {
        userId: 3,
        songId: 2,
      },
      {
        userId: 4,
        songId: 3,
      },
      {
        userId: 4,
        songId: 4,
      },
      {
        userId: 5,
        songId: 5,
      },
      {
        userId: 6,
        songId: 6,
      },
      {
        userId: 7,
        songId: 7,
      },
      {
        userId: 8,
        songId: 8,
      },
      {
        userId: 8,
        songId: 9,
      },
      {
        userId: 8,
        songId: 10,
      },
      {
        userId: 8,
        songId: 11,
      },
      {
        userId: 8,
        songId: 12,
      },
      {
        userId: 8,
        songId: 13,
      },
      {
        userId: 9,
        songId: 14,
      },
      {
        userId: 10,
        songId: 15,
      },
      {
        userId: 10,
        songId: 16,
      },
      {
        userId: 10,
        songId: 17,
      },
      {
        userId: 10,
        songId: 18,
      },
      {
        userId: 10,
        songId: 19,
      },
      {
        userId: 11,
        songId: 20,
      },
      {
        userId: 11,
        songId: 21,
      },
      {
        userId: 11,
        songId: 22,
      },
      {
        userId: 12,
        songId: 23,
      },
      {
        userId: 12,
        songId: 24,
      },
      {
        userId: 13,
        songId: 25,
      },
      {
        userId: 14,
        songId: 26,
      },
      {
        userId: 14,
        songId: 27,
      },
      {
        userId: 14,
        songId: 28,
      },
      {
        userId: 15,
        songId: 29,
      },
      {
        userId: 15,
        songId: 30,
      },
      {
        userId: 15,
        songId: 31,
      },
      {
        userId: 15,
        songId: 32,
      },
      {
        userId: 15,
        songId: 33,
      },
      {
        userId: 16,
        songId: 34,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Likes", null, {});
  },
};
