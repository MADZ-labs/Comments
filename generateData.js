const faker = require('faker');
const fs = require('fs');
const home = require('os').homedir();
// const path = require('path');

const title = 'comments20';
const logpath = home + '/Desktop/Projects/' + title + '.txt';
const stream = fs.createWriteStream(logpath);

const randomNumber = (num) => { Math.floor(Math.random() * num); };

const randomizeTiers = () => {
  const creators = randomNumber(6);
  const tiers = ['Backer', 'Superbacker', `${creators}-time creator`];
  return tiers[randomNumber(3)];
};


stream.once('open', () => {
  const comments = [];
  for (let i = 0; i < 500000; i++) {
    const project = randomNumber(10000000);

    comments.push({
      avatar: faker.internet.avatar(),
      username: faker.internet.userName(),
      backer: randomizeTiers(),
      comment: faker.lorem.sentences(),
      date: faker.date.past(1),
      projectName: `Project ${project}`,
      projectID: project,
    });
  }
  stream.write(JSON.stringify(comments));
  stream.end();
});

fs.readFile(logpath, { encoding: 'utf-8' }, (err, data) => {
  if (!err) {
    console.log(JSON.parse(data));
  } else {
    console.log(err);
  }
});
