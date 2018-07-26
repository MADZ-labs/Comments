import React from 'react';
import moment from 'moment';

const img = {
  height: '50px',
  width: 'auto',
};

const CommentEntry = ({ comment }) => (
  <div>
    <div>
      <img style={img} src={comment.avatar} alt="" />
      <div>
        {comment.username}
        {comment.backer} 
        {moment(comment.date).startOf('hour').fromNow()}
      </div>
      <div>
        {comment.comment}
      </div>
    </div>

  </div>
);

export default CommentEntry;
