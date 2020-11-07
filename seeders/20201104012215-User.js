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
      bio: "FLAME ON!",
      companyName: null,
      likedJobs: null,
      postedJobs: null,
      createdAt: new Date(),
      updatedAt: new Date()
        }], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
