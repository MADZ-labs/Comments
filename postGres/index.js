const { Pool, Client } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'Steven',
  password: 'password',
  database: 'comments'
});


const getReviews = (projects_id, projectName, cb) => {
  let query = `SELECT avatar, username, backer, comment, date_prod FROM comments WHERE comments.projects_id = ${projects_id}`;
  pool.query(query, (err, res) => {
    if (err) console.log(err);
    for (let i = 0; i < res.rows.length; i++) {
      res.rows[i].date = res.rows[i].date_prod;
      res.rows[i].project = {
        projectName: projectName,
        projectID: projects_id
      };
      delete res.rows[i].date_prod;
    }
    cb(res.rows);
  });
};

const createReview = (avatar, username, backer, comment, date_prod, projects_id, cb) => {
  let query = `INSERT INTO comments (avatar, username, backer, comment, date_prod, projects_id) VALUES ('${avatar}', '${username}', '${backer}', '${comment}', '${date_prod}', ${projects_id})`;
  // ('https://s3-us-west-1.amazonaws.com/pley-land/10.jpg', 'KassandraC', 'Backer', 'Lorem Ipsum', '2018-06-06T23:33:20.811Z', 10000000);
  pool.query(query, (err, res) => {
    if (err) console.log(err);
    console.log('INSERT SUCCESS');
    cb(res);
  });
};

const updateReview = (username, comment, date_prod, projects_id, cb) => {
  let query = `UPDATE comments SET (comment, date_prod) = ('${comment}', '${date_prod}') WHERE projects_id = ${projects_id} AND username = '${username}'`;
  // ('Lorem Ipsum', '2018-06-06T23:33:20.811Z') WHERE projects_id = 10000000 AND username = 'KassandraC'`;
  pool.query(query, (err, res) => {
    if (err) console.log(err);
    console.log('UPDATE SUCCESS');
    cb(res);
  });
};

const deleteReview = (username, comment, projects_id, cb) => {
  let query = `DELETE FROM comments WHERE username = '${username}' AND comment = '${comment}' AND projects_id = ${projects_id}`;
  // let query = `DELETE FROM comments WHERE username = 'KassandraC' AND comment = 'Lorem Ipsum' AND projects_id = 10000000`;
  pool.query(query, (err, res) => {
    if (err) console.log(err);
    console.log('DELETE SUCCESS');
    cb(res);  });
};

// MongoDB
// { avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/timothycd/128.jpg',
//     username: 'Kirk.Wunsch',
//     backer: 'Superbacker',
//     comment: 'Ut sed aliquam rerum expedita. Enim voluptatem eum veniam non necessitatibus. Quasi id est odit nesciunt fugiat assumenda sit ut. Ut nihil ipsa. Excepturi repellat necessitatibus cupiditate et. Voluptatem voluptatem quis maxime aut rerum ea impedit perspiciatis odio.',
//     date: 2017-12-03T23:20:03.443Z,
//     project: { projectName: 'Reilly - Williamson', projectID: 183 } },

// PostGres
// { id: 8755464,
//   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/chadami/128.jpg',
//   username: 'Cedrick.Cole',
//   backer: '2-time creator',
//   comment: 'Culpa quo optio et voluptas quibusdam. Quia inventore ut quia quibusdam praesentium. Architecto neque et quo. Earum adipisci molestiae alias sed et.',
//   date_prod: 2017-12-20T08:00:00.000Z,
//   projects_id: 999999 },

// const client = new Client({
//   host: 'localhost',
//   port: 5432,
//   user: 'Steven',
//   password: 'password',
//   database: 'example'
// });


// client.connect();

// client.query('SELECT NOW()', (err, res) => {
//  console.log('client');
//   console.log(err, res)
//   client.end()
// });

module.exports = {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
};
