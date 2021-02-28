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
          userId: 8, //songId 10
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
          userId: 10, //songId 15
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
            "/songs/Ariana Grande ft. Nicki Minaj - Side To Side (Official Video) ft. Nicki Minaj.mp3",
        },
        {
          userId: 10,
          title: "Love Me Harder",
          audiofile:
            "/songs/Ariana Grande, The Weeknd - Love Me Harder (Official Video).mp3",
        },
        {
          userId: 11, //song20
          title: "Hey Brother",
          audiofile: "/songs/Avicii - Hey Brother.mp3",
        },
        {
          userId: 11,
          title: "The Nights",
          audiofile: "/songs/Avicii - The Nights.mp3",
        },
        {
          userId: 11,
          title: "Wake Me Up",
          audiofile: "songs/Avicii - Wake Me Up (Official Video).mp3",
        },
        {
          userId: 12,
          title: "Crazy In Love",
          audiofile: "songs/Beyoncé - Crazy In Love ft. JAY Z.mp3",
        },
        {
          userId: 12,
          title: "Single Ladies",
          audiofile:
            "/songs/Beyoncé - Single Ladies (Put a Ring on It) (Video Version).mp3",
        },
        {
          userId: 13,
          title: "Toxic",
          audiofile: "songs/Britney Spears - Toxic (Official Video).mp3",
        },
        {
          userId: 14,
          title: "24K Magic",
          audiofile: "songs/Bruno Mars - 24K Magic (Official Video).mp3",
        },
        {
          userId: 14,
          title: "Locked Out of Heaven",
          audiofile:
            "songs/Bruno Mars - Locked Out Of Heaven (Official Video).mp3",
        },
        {
          userId: 14,
          title: "Treasure",
          audiofile: "/songs/Bruno Mars - Treasure (Official Video).mp3",
        },
        {
          userId: 15,
          title: "Blame", //song29
          audiofile: "/songs/Calvin Harris - Blame ft. John Newman.mp3",
        },
        {
          userId: 15, //song30
          title: "Outside",
          audiofile:
            "/songs/Calvin Harris - Outside (Official Video) ft. Ellie Goulding.mp3",
        },
        {
          userId: 15,
          title: "Summer",
          audiofile: "/songs/Calvin Harris - Summer (Official Video).mp3",
        },
        {
          userId: 15,
          title: "How Deep is Your Love",
          audiofile:
            "/songs/Calvin Harris & Disciples - How Deep Is Your Love.mp3",
        },
        {
          userId: 15,
          title: "One Kiss",
          audiofile:
            "/songs/Calvin Harris, Dua Lipa - One Kiss (Official Video).mp3",
        },
        {
          userId: 16,
          title: "Let Me Love You",
          audiofile:
            "songs/DJ Snake - Let Me Love You ft. Justin Bieber (Official Video).mp3",
        },
        {
          userId: 17,
          title: "mmmmh",
          audiofile: "/songs/kai exo 음 mmmh.mp3",
        },
        {
          userId: 18,
          title: "California Gurls",
          audiofile:
            "/songs/Katy Perry - California Gurls (Official Music Video) ft. Snoop Dogg.mp3",
        },
        {
          userId: 18,
          title: "Firework",
          audiofile: "/songs/Katy Perry - Firework (Official Music Video).mp3",
        },
        {
          userId: 18,
          title: "Hot N Cold",
          audiofile: "/songs/Katy Perry - Firework (Official Music Video).mp3",
        },
        {
          userId: 18,
          title: "Last Friday",
          audiofile:
            "/songs/Katy Perry - Last Friday Night (T.G.I.F.) (Official Music Video).mp3",
        },
        {
          userId: 18, //song 40
          title: "Roar",
          audiofile: "/songs/Katy Perry - Roar (Official).mp3",
        },
        {
          userId: 19,
          title: "Tik Tok",
          audiofile: "/songs/Katy Perry - Roar (Official).mp3",
        },
        {
          userId: 20,
          title: "It G Ma",
          audiofile: "/songs/Katy Perry - Roar (Official).mp3",
        },
      ],

      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Songs", null, {});
  },
};
