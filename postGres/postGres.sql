DROP DATABASE IF EXISTS comments;
CREATE DATABASE comments;

\c comments;

CREATE TABLE projects (
  ID SERIAL PRIMARY KEY,
  projectName VARCHAR,
  projectID INTEGER
);

CREATE TABLE comments (
  ID SERIAL PRIMARY KEY,
  avatar VARCHAR,
  username VARCHAR,
  backer VARCHAR,
  comment VARCHAR,
  date_prod DATE,
  projects_id INTEGER,
  FOREIGN KEY (projects_id) REFERENCES projects (ID) ON DELETE CASCADE ON UPDATE CASCADE
);

-- CREATE TABLE test (
--   ID SERIAL PRIMARY KEY,
--   avatar VARCHAR,
--   username VARCHAR,
--   backer VARCHAR,
--   comment VARCHAR,
--   date_prod DATE,
--   projects_id INTEGER,
-- );

-- INSERT INTO projects (projectName, projectID) VALUES ('Project 1', 1);
-- INSERT INTO projects (projectName, projectID) VALUES ('Project 2', 2);

-- INSERT INTO comments (avatar, username, backer, comment, date_prod, projects_id)
-- VALUES ('avatar1', 'username1', 1, 'comment1', DEFAULT, 1);
-- INSERT INTO comments (avatar, username, backer, comment, date_prod, projects_id)
-- VALUES ('avatar2', 'username2', 2, 'comment2', DEFAULT, 1);
-- INSERT INTO comments (avatar, username, backer, comment, date_prod, projects_id)
-- VALUES ('avatar3', 'username3', 3, 'comment3', DEFAULT, 1);
-- INSERT INTO comments (avatar, username, backer, comment, date_prod, projects_id)
-- VALUES ('avatar4', 'username4', 4, 'comment4', DEFAULT, 2);
-- INSERT INTO comments (avatar, username, backer, comment, date_prod, projects_id)
-- VALUES ('avatar5', 'username5', 5, 'comment5', DEFAULT, 2);
