const request = require('supertest');
const app = require('../../server/app');

describe('Server Test', () => {
  it('should respond with a status code of 200 during a GET method', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with a status code of 200 during a GET method', () => {
    request(app).get('/').expect(200);
  });

  it('should respond with a status code of 200 for the GET request to comments ', async () => {
    const response = await request(app).get('/:projectName/:projectID/section/comments');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with the correct content type', async () => {

    const response = await request(app).get('/:projectName/:projectID/section/comments');
    console.log(response.header['content-type']);

    expect(response.header['content-type']).toBe('application/json; charset=utf-8');
  });
});
