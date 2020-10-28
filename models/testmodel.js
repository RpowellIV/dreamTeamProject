'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class testmodel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  testmodel.init({
    nameTest: DataTypes.STRING,
    emailTest: DataTypes.STRING,
    numTest: DataTypes.INTEGER,
    confirm: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'testmodel',
  });
  return testmodel;
};