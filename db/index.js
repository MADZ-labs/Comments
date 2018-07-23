const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const faker = require('faker');

const commentSchema = mongoose.Schema({
  avatar: String,
  username: {
    type: String,
  },
  backer: String,
  comment: String,
  date: Number,
});

let Comment = mongoose.model('Comment', commentSchema);


let fakeComments = [];

let generateComments = () => {
  for (let i = 0; i < 21; i += 1) {
    let comment = {
      avatar: faker.internet.avatar(),
      username: faker.internet.userName() ,
      backer: randomBackerTier(),
      comment: faker.lorem.sentences(),
      date: ,

    }
    fakeComments.push(comment);
  }
}

let insertComments = (arr) => {
  Comment.insertMany(arr, (err) => {
    if(err) {
      // log.info('failed to store the data');
    } else {
      // log.info('stored');
    }
  })

}

let randomBackerTier = () => {
  let tiers = ['Backer', 'Superbacker'];
  let random = Math.floor(Math.random * Math.floor(tiers.length))
  return tiers[random];
}
// userName

module.exports = {
  generateComments
}