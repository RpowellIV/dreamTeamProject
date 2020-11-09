'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let amount = 50;

    while (amount--) {
      data.push({
        googleId: faker.finance.routingNumber(),
        displayName: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        image: faker.image.image(),
        email: faker.internet.email(),
        isEmployer: faker.random.boolean(),
        bio: faker.company.catchPhrase(),
        companyName: faker.company.companyName(),
        likedJobs: faker.random.number(),
        postedJobs: faker.random.number(),
        createdAt: new Date(),
        updatedAt: new Date()



      });
    }

    return queryInterface.bulkInsert('Users', data, [{
      googleId: 11234567898890123,
      displayName: "Johnny Storm",
      firstName: "Johnny",
      lastName: "Storm",
      image: null,
      email: "humantorch@FF.com",
      isEmployer: false,
      bio: "FLAME ON!",
      companyName: null,
      likedJobs: "1",
      postedJobs: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
