'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      googleId: {
        type: Sequelize.NUMERIC,
        allowNull: false
      },
      displayName: {
          type: Sequelize.STRING,
          allowNull: false
      },
      firstName: {
          type: Sequelize.STRING,
          allowNull: false
      },
      lastName: {
          type: Sequelize.STRING,
          allowNull: false
      },
      image: {
          type: Sequelize.STRING,
      },
      email: {
          type: Sequelize.STRING
      },
      isEmployer: {
          type: Sequelize.BOOLEAN
      },
      bio: {
          type: Sequelize.TEXT
      },
      companyName: {
        type: Sequelize.STRING
      },
      likedJobs: {
        type: Sequelize.STRING
      },
      postedJobs: {
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
    await queryInterface.dropTable('Users');
  }
};
