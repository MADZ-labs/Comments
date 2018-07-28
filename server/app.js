const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const Log = require('log');
const db = require('../db/index');

const log = new Log('info');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '../client/dist/')));

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/:projectName/:projectID/section/comments/', (req, res) => {
  const { params } = req;
  params.projectID = Number(params.projectID);
  // db.resetData();
  db.generateComments();
  db.retrieveComments(params, (err, comments) => {
    if (err) {
      log.info(err);
    } else {
      res.json(comments);
    }
  });
});

module.exports = app;
