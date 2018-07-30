const request = require('supertest');
const app = require('../../server/app');

describe('Server Test', () => {
  it('should respond with a status code of 200 during a GET method', () => {
    request(app).get('/').expect(200);
  });

  it('should respond with a status code of 200 for the GET request to comments ', () => {
    request(app).get('/:projectName/:projectID/section/comments').expect(200);
  });

  it('should respond with the correct content type', () => {
    request(app).get('/:projectName/:projectID/section/comments').expect('Content-Type', /json/);
  });
});
