'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    // Model attributes are defined here
    googleId: {
        type: DataTypes.NUMERIC,
        allowNull: false
    },
    displayName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    image: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING
        // allowNull defaults to true
    },
    isEmployer: {
        type: DataTypes.BOOLEAN
        // allowNull defaults to true
    },
    isEmployee: {
        type: DataTypes.BOOLEAN
        // allowNull defaults to true
    },
    bio: {
        type: DataTypes.TEXT
        // allowNull defaults to true
    },

}, {
    sequelize,
    modelName: 'Users',
  });
  return User;
};
