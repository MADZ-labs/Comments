import db from '../../db/index';

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

describe('Database', () => {
  // beforeAll(() => {
  //   mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });
  // })

  // afterAll((done) => {
  //   mongoose.disconnect(done)
  // })

  it('should connect to the database', () => {
  });
});
