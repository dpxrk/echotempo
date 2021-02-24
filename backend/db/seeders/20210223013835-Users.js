"use strict";
const faker = require("faker");
const bcrypt = require("bcryptjs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "demo@user.io",
          username: "Demo-lition",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser1",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser2",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser3",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser4",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser5",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: faker.internet.email(),
          username: "FakeUser6",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: "2Pac@2pac.com",
          username: "2Pac",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: "Alan@Walker.com",
          username: "Alan Walker",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: "Ariana@Grande.com",
          username: "Ariana Grande",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: "Avicii@Avicii.com",
          username: "Avicii",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: "Beyonce@Beyonce.com",
          username: "Beyonce",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: "Britnay@Spears.com",
          username: "Britnay Spears",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: "Bruno@Mars.com",
          username: "Bruno Mars",
          hashedPassword: bcrypt.hashSync("password"),
        },
        {
          email: "Calvin@Harris.com", //15
          username: "Calvin Harris",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
        {
          email: "DJ@Snake.com", //15
          username: "DJ Snake",
          hashedPassword: bcrypt.hashSync(faker.internet.password()),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
