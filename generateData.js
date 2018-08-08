const faker = require('faker');
var fs = require("fs");
var home = require("os").homedir();
var path = require('path'); 

var title = 'comments20';
var logpath = home + '/Desktop/Projects/' + title + '.txt';
var stream = fs.createWriteStream(logpath);

const randomNumber = (num) => {
	return Math.floor(Math.random() * num);
}

const randomizeTiers = () => {
	let creators = randomNumber(6);
	let tiers = ['Backer', 'Superbacker', `${creators}-time creator`];
  return tiers[randomNumber(3)];
};


stream.once('open', (fd) => {
	let comments = [];
	for (let i = 0; i < 500000; i++) {
		project = randomNumber(10000000);

		comments.push({
			avatar: faker.internet.avatar(),
			username: faker.internet.userName(),
			backer: randomizeTiers(),
			comment: faker.lorem.sentences(),
			date: faker.date.past(1),
			projectName: `Project ${project}`,
			projectID: project
		})
	}
  stream.write(JSON.stringify(comments));
  stream.end();
});

fs.readFile(logpath, {encoding: 'utf-8'}, function(err,data){
  if (!err) {
    console.log(JSON.parse(data));
  } else {
    console.log(err);
  }
});