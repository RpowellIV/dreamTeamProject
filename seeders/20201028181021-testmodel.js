'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('testmodels', [{
      nameTest: "John",
      emailTest: "Doe",
      numTest: 123,
      confirm: true,
      createdAt: new Date(),
      updatedAt: new Date()
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('testmodels', null, {})
  }
};
