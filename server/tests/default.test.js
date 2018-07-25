const request = require('supertest');
const app = require('../server.js');

describe('Test /', () => {
  it('should return status code of 200', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
  });
  it('should return an object of data', async () => {
    const response = await request(app).get('/');
    expect(typeof response).toBe('object');
  });
});
