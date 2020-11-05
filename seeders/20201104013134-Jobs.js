'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Jobs', [{
      title: "Member of Fantastic Four",
      companyName: "Future Foundation",
      description: "Must be able to safely burst into flames",
      email: "ReedRichards@F4.com",
      location: "Madison Ave & E 42nd StNew York, NY 10017",
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
