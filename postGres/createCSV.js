const fs = require('fs');
const home = require('os').homedir();

let title = `comments20`;
let logpath = home + '/Desktop/Projects/' + title + '.txt';

// Write insert statement for project

// fs.readFile(logpath, { encoding: 'utf-8' }, (err, data) => {
//   if (!err) {
//     const stream = fs.createWriteStream(home + '/Desktop/Projects/' + title + '.csv');
//     let projects = JSON.parse(data);
//     let string = 'projectName,projectID\n';
//     for (let i = 0; i < projects.length; i++) {
//       string += `${projects[i].projectName},${projects[i].projectID}\n`;
//     }
//     stream.once('open', () => {
//       stream.write(string);
//       stream.end();
//     });
//   } else {
//     console.log(err);
//   }
// });

// Write insert statement for comments

fs.readFile(logpath, { encoding: 'utf-8' }, (err, data) => {
  if (!err) {
    const stream = fs.createWriteStream(home + '/Desktop/Projects/' + title + '.csv');
    let comments = JSON.parse(data);
    let string = 'avatar,username,backer,comment,date_prod,projects_id\n';
    for (let i = 0; i < comments.length; i++) {
      string += `"${comments[i].avatar}","${comments[i].username}","${comments[i].backer}","${comments[i].comment}","${comments[i].date}",${comments[i].projectID}\n`;
    }
    stream.once('open', () => {
      stream.write(string);
      stream.end();
    });
  } else {
    console.log(err);
  }
});
