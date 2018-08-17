const faker = require('faker');
const mongoose = require('mongoose');
const Log = require('log');

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

const randomizer = (ele) => {
  const randIdx = Math.floor(Math.random() * ele.length);
  const randNum = Math.floor(Math.random() * ele + 1);

  if (Array.isArray(ele)) {
    return ele[randIdx];
  }
  return randNum;
};

const Comment = mongoose.model('Comment', commentSchema);
const creators = randomizer(6);
const tiers = ['Backer', 'Superbacker', `${creators}-time creator`];

const generateProjects = () => {
  const projects = [];
  for (let i = 100; i < 5100; i++) {
    projects.push([faker.company.companyName(), i]);
  }
  return projects;
}

const projects = [['Indie Movie', 100], ['Crypto Currency Project', 101], ['Hipster Notebook', 102]];

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

const generateComments = (projects) => {
  const fakeComments = [];
  for (let i = 0; i < 1000; i += 1) {
    const randProj = randomizer(projects);
    const comment = {
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      backer: randomizer(tiers),
      comment: faker.lorem.sentences(),
      date: faker.date.past(1),
      project: {
        projectName: randProj[0],
        projectID: randProj[1],
      },
    };
    fakeComments.push(comment);
  }
  console.log(fakeComments);
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
  generateProjects
};
