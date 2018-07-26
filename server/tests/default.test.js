const request = require('supertest');
const app = require('../server.js');


describe('Test /', () => {
  it('should return status code of 200', async (done) => {
    const response = await request(app).get('/comments');
    expect(response.statusCode).toEqual(200);
    done();
  });
});
