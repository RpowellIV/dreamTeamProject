'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      googleId: 11234567898890123,
      displayName: "Johnny Storm",
      firstName: "Johnny",
      lastName: "Storm",
      image: null,
      email: "humantorch@FF.com",
      isEmployer: false,
      isEmployee: true,
      bio: "FLAME ON!",
      createdAt: new Date(),
      updatedAt: new Date()
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
