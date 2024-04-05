
'use strict';
// using sequelize to model out data, the string is the table name
const People = (sequelize, DataTypes) => sequelize.define('People', {
  name: DataTypes.STRING(100),
  age: DataTypes.INTEGER,
  heightInches: DataTypes.FLOAT,
  eyeColor: DataTypes.STRING(20),
});

module.exports = People;