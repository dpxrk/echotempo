"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          userId: 4,
          title: "talk",
          audiofile: "/songs/2019-06-07_-_Chill_Gaming_-_David_Fesliyan.mp3",
        },
        {
          userId: 3,
          title: "Chill Gaming",
          audiofile: "/songs/2019-06-07_-_Chill_Gaming_-_David_Fesliyan.mp3",
        },
        {
          userId: 2,
          title: "Homework",
          audiofile: "/songs/2019-06-12_-_Homework_-_David_Fesliyan.mp3",
        },
        {
          userId: 5,
          title: "I Got This",
          audiofile:
            "/songs/2019-06-12_-_I_Got_This_-_www.fesliyanstudios.com_-_David_Renda.mp3",
        },
        {
          userId: 7,
          title: "Reaching Out",
          audiofile:
            "/songs/2020-11-17_-_Reaching_Out_-_www.FesliyanStudios.com_David_Renda.mp3",
        },
        {
          userId: 2,
          title: "Dancing In The Desert",
          audiofile:
            "/songs/2021-01-12_-_Dancing_In_The_Desert_-_www.FesliyanStudios.com_David_Renda.mp3",
        },
        {
          userId: 6,
          title: "Steady Enjoyment",
          audiofile:
            "/songs/songs/2021-01-12_-_Steady_Enjoyment_-_www.FesliyanStudios.com_David_Renda.mp3",
        },
      ],

      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
