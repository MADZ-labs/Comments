const app = require('./app');

const port = 3003;
if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => console.log(`listening on ${port}`));
}
