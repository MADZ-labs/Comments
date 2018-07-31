const faker = require('faker');
const mongoose = require('mongoose');
const Log = require('log');

mongoose.Promise = global.Promise;
const log = new Log('info');

mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true });

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

const resetData = () => {
  Comment.remove({}, (err) => {
    log.info('collection removed');
  });
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

const generateComments = () => {
  const fakeComments = [];
  for (let i = 0; i < 100; i += 1) {
    const randProj = randomizer(projects);
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
  insertComments(fakeComments);
};

const retrieveComments = (params, cb) => {
  Comment.find({ project: params }).limit(30).sort({ date: -1 })
    .exec((err, data) => {
      cb(null, data);
    });
};

module.exports = {
  Comment,
  generateComments,
  insertComments,
  retrieveComments,
  resetData,
};
