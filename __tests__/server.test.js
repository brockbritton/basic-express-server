
'use strict';

const app = require('../src/server.js');
const supertest = require('supertest');

const request = supertest(app);

describe('Express Server', () => {
  test('Should response with a 200 when a valid name is present', async () => {
    let response = await request.get('/person?name=jeff');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual({'name':'jeff'});
  });
  test('Should return a 404 for an invalid route', async () => {
    let response = await request.get('/man');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Invalid Route. Page not Found.');
  });
  test('Should return a 404 for an bad method', async () => {
    let response = await request.post('/person');
    expect(response.status).toEqual(404);
    expect(response.text).toEqual('Invalid Route. Page not Found.');
  });
  test('Should return a 500 when no name is provided', async () => {
    let response = await request.get('/person/');
    expect(response.status).toEqual(500);
    expect(response.text).toEqual('Server Error.');
  });
});
