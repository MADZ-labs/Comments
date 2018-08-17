var newrelic = require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Log = require('log');
const db = require('../db/index');
const pgdb = require('../postGres/index');


const log = new Log('info');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/', (req, res) => res.send('Hello World!'));

// app.get('/:projectName/:projectID/section/comments', (req, res) => {
//   const { params } = req;
//   params.projectID = Number(params.projectID);
//   const projects = db.generateProjects();
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
	const { params } = req;
  pgdb.getReviews(params.projectID, params.projectName, (results) => (res.send(results)));
});


app.post('/:projectName/:projectID/section/comments', (req, res) => {
	const { params } = req;
	pgdb.createReview(req.body.avatar, req.body.username, req.body.backer, req.body.comment, req.body.date_prod, params.projectID, (results) => (res.send(results)));
});

app.put('/:projectName/:projectID/section/comments', (req, res) => {
	const { params } = req;
	pgdb.updateReview(req.body.username, req.body.comment, req.body.date_prod, params.projectID, (results) => (res.send(results)));
});

app.delete('/:projectName/:projectID/section/comments', (req, res) => {
	const { params } = req;
	pgdb.deleteReview(req.body.username, req.body.comment, params.projectID, (results) => (res.send(results)));
});

module.exports = app;
