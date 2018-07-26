const faker = require('faker');
const mongoose = require('mongoose');
const Log = require('log');

const log = new Log('info');

mongoose.connect('mongodb://localhost/test');

const commentSchema = mongoose.Schema({
  avatar: String,
  username: { type: String },
  backer: String,
  comment: String,
  date: Number,
  project: {
    projectName: String,
    projectID: Number,
  },
});

const Comment = mongoose.model('Comment', commentSchema);

const tiers = ['Backer', 'Superbacker'];
const projects = [['Indie Movie', 100], ['Crypto Currency Project', 101], ['Hipster Notebook', 102]];

const randomizer = (arr) => {
  const random = Math.floor(Math.random() * arr.length);
  return arr[random];
};


const generateComments = (cb) => {
  const fakeComments = [];
  const randProj = randomizer(projects);
  for (let i = 0; i < 21; i += 1) {
    const comment = {
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      backer: randomizer(tiers),
      comment: faker.lorem.sentences(),
      date: faker.date.recent(),
      project: {
        projectName: randProj[0],
        projectID: randProj[1],
      },
    };
    fakeComments.push(comment);
  }
  cb(null, fakeComments);
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
