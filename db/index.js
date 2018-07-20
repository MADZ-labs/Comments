const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const commentSchema = mongoose.Schema({
  username: {
    type: String,
  },
  backer: String,
  comment: String,
  date: Number,
});

let Comment = mongoose.model('Comment', commentSchema);
