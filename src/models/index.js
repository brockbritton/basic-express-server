'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite::memory:';
const PersonSchema = require('./people.js'); 
const PetSchema = require('./pets.js');
const Collection = require('./collection.js');


const sequelize = new Sequelize(DATABASE_URL);

const People = PersonSchema(sequelize, DataTypes);
const Pets = PetSchema(sequelize, DataTypes);

People.hasMany(Pets, {foreignKey: 'personId', sourceKey: 'id' });
Pets.belongsTo(People, {foreignKey: 'personId', targetKey: 'id'});


module.exports = {
  People,
  Pets,
  sequelize,
  Collection,
};