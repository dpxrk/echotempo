"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    "Comments",
      [
        {
          userId: 2,
          songId: 3,
          content: "Fire!",
        },
        {
          userId: 3,
          songId: 4,
          content: "I love it",
        },
        {
          userId: 4,
          songId: 5,
          content: "So calming!",
        },
        {
          userId: 4,
          songId: 6,
          content: "Gosh, so good",
        },
        {
          userId: 2,
          songId: 3,
          content: "you have to release more stuff!",
        },
        {
          userId: 5,
          songId: 3,
          content: "More more more more more",
        },
        {
          userId: 6,
          songId: 7,
          content: "<3",
        },
        {
          userId: 2,
          songId: 3,
          content: "Yessssssss",
        },
      ];
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
