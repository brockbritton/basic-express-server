
'use strict';

const { app } = require('../src/server.js');
const supertest = require('supertest');
const { sequelize, People } = require('../src/models');

const request = supertest(app);

beforeAll(async () => {
  await sequelize.sync();
  await People.create({
    name: 'brock',
    age: 21,
    heightInches: 74,
    eyeColor: 'blue',
  });
});

afterAll(async () => {
  await sequelize.drop();
});

describe('Express Server', () => {
  test('Should return a 404 for an invalid route', async () => {
    let response = await request.get('/person');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Invalid Route. Page not Found.');
  }); 
  
  test('Should return a 404 for an bad method', async () => {
    let response = await request.post('/person');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Invalid Route. Page not Found.');
  });

  xtest('Should return a 500 when no id is provided', async () => {
    let response = await request.delete('/api/people/');
    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Server Error.');
  });

  //CREATE 1
  test('Should create a person in the database and respond with status 200', async () => {
    const newPerson = {
      name: 'jeff',
      age: 45,
      heightInches: 60,
      eyeColor: 'brown',
    };
    let response = await request.post('/api/people').send(newPerson);
    expect(response.status).toEqual(200);
    expect(response.body.name).toBe(newPerson.name);
  });

  // GET ALL
  test('Should read all people in the database and respond with status 200', async () => {
    let response = await request.get('/api/people');
    expect(response.status).toEqual(200);
    expect(response.body[0].name).toEqual('brock');
  });

  //GET 1
  test('Should read one person in the database and return it with a status 200', async () => {
    let response = await request.get('/api/people/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('brock');

  });

  test('Should read one person in the database and return it with a status 200', async () => {
    let response = await request.put('/api/people/1');
    expect(response.status).toEqual(200);
    expect(response.body.name).toEqual('brock');

  });

  test('Should delete one person in the database and return the now empty object with a status of 200', async () => {
    let response = await request.delete('/api/people/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeTruthy();
  });

});
