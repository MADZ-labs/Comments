const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Log = require('log');
const db = require('../db/index');
const pgdb = require('../postGres/index');

const log = new Log('info');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/', (req, res) => res.send('Hello World!'));

// app.get('/:projectName/:projectID/section/comments', (req, res) => {
//   const { params } = req;
//   params.projectID = Number(params.projectID);
//   const projects = db.generateProjects();
//   console.log(projects);
//   db.generateComments(projects);
//   db.retrieveComments(params, (err, comments) => {
//     if (err) {
//       log.info(err);
//     } else {
//       res.json(comments);
//     }
//   });
// });

app.get('/:projectName/:projectID/section/comments', (req, res) => {
  res.send('GET request to the homepage');
});


app.post('/:projectName/:projectID/section/comments', (req, res) => {
  res.send('POST request to the homepage');
});

app.put('/:projectName/:projectID/section/comments', (req, res) => {
  res.send('PUT request to the homepage');
});

app.delete('/:projectName/:projectID/section/comments', (req, res) => {
  res.send('DELETE request to the homepage');
});

module.exports = app;
