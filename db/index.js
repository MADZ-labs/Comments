const mongoose = require('mongoose');

const Log = require('log');

const log = new Log('info');

mongoose.connect('mongodb://localhost/test');

const faker = require('faker');

const commentSchema = mongoose.Schema({
  avatar: String,
  username: { type: String },
  backer: String,
  comment: String,
  date: Number,
});

const Comment = mongoose.model('Comment', commentSchema);

const randomBackerTier = () => {
  const tiers = ['Backer', 'Superbacker'];
  const random = Math.floor(Math.random * Math.floor(tiers.length))
  return tiers[random];
};

const generateComments = () => {
  const fakeComments = [];
  for (let i = 0; i < 21; i += 1) {
    const comment = {
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      backer: randomBackerTier(),
      comment: faker.lorem.sentences(),
      date: faker.date.recent(),
    };
    fakeComments.push(comment);
  }
  return fakeComments;
};

const insertComments = (arr) => {
  Comment.insertMany(arr, (err) => {
    if (err) {
      log.info('failed to store the data');
    } else {
      log.info('stored');
    }
  });
};

module.exports = {
  generateComments,
  insertComments,
};
