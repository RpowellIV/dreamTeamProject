'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jobs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jobs.belongsTo(models.Users)
      // Jobs.hasMany(models.Users)
    }
  };
  Jobs.init({
    title: DataTypes.STRING,
    companyName: DataTypes.STRING,
    description: DataTypes.TEXT,
    email: DataTypes.STRING,
    location: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    numApplied: DataTypes.INTEGER,
    whoApplied: DataTypes.STRING ,
      
  }, {
    sequelize,
    modelName: 'Jobs',
  });
  return Jobs;
};