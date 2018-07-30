const request = require('supertest');
const app = require('../../server/app');

describe('Server Test', () => {
  it('should response with the GET method', () => {
    request(app).get('/').expect(200);
  });

  it('should respond to the comments GET', () => {
    request(app).get('/:projectName/:projectID/section/comments').expect(200);
  });

  it('should response with the correct content type', () => {
    request(app).get('/:projectName/:projectID/section/comments').expect('Content-Type', /json/);
  }); 
});