'use strict';

const faker = require('faker');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let data = [];
    let amount = 50;

    while (amount--) {
      data.push({
        title: faker.company.catchPhrase(),
        companyName: faker.company.companyName(),
        description: faker.lorem.sentences(),
        email: faker.internet.email(),
        location: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        numApplied: faker.random.number(),
        whoApplied: faker.internet.userName(),
        createdAt: new Date(),
        updatedAt: new Date()



      });
    }
    return queryInterface.bulkInsert('Jobs', data, [{
      title: "Member of Fantastic Four",
      companyName: "Future Foundation",
      description: "Must be able to safely burst into flames",
      email: "ReedRichards@F4.com",
      location: "Madison Ave & E 42nd StNew York, NY 10017",
      city: "New York",
      state: "New York",
      numApplied: 3,
      whoApplied: null,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Jobs', null, {})
  }
};
