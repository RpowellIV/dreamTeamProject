'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Jobs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      companyName: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      numApplied: {
        type: Sequelize.INTEGER
      },
      whoApplied: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Jobs');
  }
};