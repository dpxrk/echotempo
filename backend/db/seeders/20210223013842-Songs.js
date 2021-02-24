"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Songs",
      [
        {
          userId: 4,
          title: "Talk",
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
            "/songs/2021-01-12_-_Steady_Enjoyment_-_www.FesliyanStudios.com_David_Renda.mp3",
        },
        {
          userId: 8,
          title: "All Eyez On Me",
          audiofile: "/songs/2Pac - All Eyez On Me.mp3",
        },
        {
          userId: 8,
          title: "Hellrazor",
          audiofile: "/songs/2Pac - Hellrazor.mp3",
        },
        {
          userId: 8,
          title: "Holla At Me",
          audiofile: "/songs/2Pac - Holla At Me.mp3",
        },
        {
          userId: 8,
          title: "Only God Can Judge Me",
          audiofile: "/songs/2Pac - Only God Can Judge Me.mp3",
        },
        {
          userId: 8,
          title: "Pain",
          audiofile: "/songs/2Pac - Pain (feat. styles p & butch Cassidy).mp3",
        },
        {
          userId: 8,
          title: "Picture Me Rolling",
          audiofile: "/songs/2Pac - Picture Me Rollin'.mp3",
        },
        {
          userId: 9,
          title: "Alone",
          audiofile: "songs/Alan Walker & Ava Max - Alone, Pt. II.mp3",
        },
        {
          userId: 10,
          title: "Break Free",
          audiofile: "/songs/Ariana Grande - Break Free ft. Zedd.mp3",
        },
        {
          userId: 10,
          title: "Focus",
          audiofile: "/songs/Ariana Grande - Focus.mp3",
        },
        {
          userId: 10,
          title: "Into You",
          audiofile: "/songs/Ariana Grande - Into You (Official Video).mp3",
        },
        {
          userId: 10,
          title: "Side To Side",
          audiofile:
            "backend/public/songs/Ariana Grande ft. Nicki Minaj - Side To Side (Official Video) ft. Nicki Minaj.mp3",
        },
      ],

      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
