const request = require('supertest');
const mongoose = require('mongoose');
const app = require('../app.js');

describe('Test', () => {
  it('should return status code of 200', async () => {
    const response = await request(app).get('/:projectName/:projectID/section/comments');
    expect(response.statusCode).toEqual(200);
  });
  afterAll(() => (
    mongoose.disconnect()
  ));
});
