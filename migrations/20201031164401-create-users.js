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
        // allowNull defaults to true
    },
    isEmployer: {
        type: Sequelize.BOOLEAN
        // allowNull defaults to true
    },
    isEmployee: {
        type: Sequelize.BOOLEAN
        // allowNull defaults to true
    },
    bio: {
        type: Sequelize.TEXT
        // allowNull defaults to true
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
