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

app.get('/comments', (req, res) => {
  db.generateComments((err, data) => {
    if (err) {
      log.info(err);
    } else {
      res.json(data);
    }
  });
});

const port = 3003;
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => log.info(`listening on ${port}`));
}

module.exports = app;
