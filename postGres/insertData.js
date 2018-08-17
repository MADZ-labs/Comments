const fs = require('fs');
const home = require('os').homedir();
const pg = require('pg');
const async = require('asyncawait/async');
const await = require('asyncawait/await');

let title = 'comments20';
const logpath = home + '/Desktop/Projects/' + title + '.txt';
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/comments';


// Write insert statement for project
// fs.readFile(logpath, { encoding: 'utf-8' }, (err, data) => {
//   if (!err) {
//     const stream = fs.createWriteStream(home + '/Desktop/Projects/' + title + 'Insert.sql');
//     let projects = JSON.parse(data);
//     let string = '\\c comments;\n';
//     for (let i = 0; i < projects.length; i++) {
//       string += `INSERT INTO projects (projectName, projectID) VALUES ('${projects[i].projectName}', ${projects[i].projectID});\n`;
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
    const stream = fs.createWriteStream(home + '/Desktop/Projects/' + title + 'Insert.sql');
    let comments = JSON.parse(data);
    let string = '\\c comments;\n';
    for (let i = 0; i < comments.length; i++) {
      string += `INSERT INTO comments (avatar, username, backer, comment, date_prod, projects_id) VALUES ('${comments[i].avatar}', '${comments[i].username}', '${comments[i].backer}', '${comments[i].comment}', '${comments[i].date}', ${comments[i].projectID});\n`;
    }
    stream.once('open', () => {
      stream.write(string);
      stream.end();
    });
  } else {
    console.log(err);
  }
});

// (async (() => {
//   const client = new pg.Client(connectionString);
//   await (client.connect());
//   const res = await (client.query('SELECT * FROM projects'));
//   res.rows.forEach(row => {
//     console.log(row);
//   });
//   await (client.end());
// }))();
