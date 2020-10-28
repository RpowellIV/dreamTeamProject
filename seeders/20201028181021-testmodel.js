'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('testmodel', [{
      nameTest: "John",
      emailTest: "Doe",
      numTest: 123,
      confirm: true,
      createdAt: new Date(),
      updatedAt: new Date()
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('testmodel', null, {})
  }
};
