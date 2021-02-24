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
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
