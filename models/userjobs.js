'use strict';
const {
  Model
} = require('sequelize');

const { Users, Jobs, userJobs } = require('../models');
module.exports = (sequelize, DataTypes) => {
  class userJobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // const Users = Users.sequelize.define

      // userJobs.belongsTo(Jobs);
      // userJobs.belongsTo(Users);
    }
  };
  userJobs.init({
    hasBoth: DataTypes.STRING,
    // userId: Users.id,
    // jobId: Jobs.id

  }, {
    sequelize,
    modelName: 'userJobs',
  });
  return userJobs;
};