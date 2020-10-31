const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/sequelize')


class User extends Model { }

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
    modelName: 'User',
    // freezeTableName: true

});

module.exports = User