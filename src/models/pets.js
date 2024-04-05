'use strict';

// using sequelize to model out data, the string is the table name
const Pets = (sequelize, DataTypes) => sequelize.define('Pets', {
  name: DataTypes.STRING(100),
  age: DataTypes.INTEGER,
  heightInches: DataTypes.FLOAT,
  hairColor: DataTypes.STRING(20),
});

module.exports = Pets;