const request = require('supertest');
const app = require('../server.js');

describe('Test /', () => {
  it('should return status code of 200', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });
  it('should return hello world', async () => {
    const response = await request(app).get('/');
    expect(typeof response).toBe('object');
  });
});
