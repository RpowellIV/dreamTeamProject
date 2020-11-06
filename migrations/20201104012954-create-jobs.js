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
<<<<<<< HEAD
=======
      city: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
>>>>>>> development
      numApplied: {
        type: Sequelize.INTEGER
      },
      whoApplied: {
<<<<<<< HEAD
        type: Sequelize.STRING,
        // onDelete: 'CASCADE',
        // references: {
        //         model: 'Users',
        //         key: 'id',
        //         as: 'whoApplied'
        //       }
=======
        type: Sequelize.STRING
>>>>>>> development
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