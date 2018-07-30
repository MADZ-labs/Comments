const mongoose = require('mongoose');
import db from '../../db/index';

mongoose.Promise = global.Promise;

describe('Database', () => {
  beforeAll(() => {
    mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });
  })

  beforeEach(() => {

  })

  afterAll((done) => {
    mongoose.disconnect(done)
  })

  it('should connect to the database', () => {
  });
});