import React from 'react';

const CommentEntry = ({ comment }) => (
  <div>
    <div>
      <img src={comment.avatar} alt="" />
      <div>
        {comment.username}
      </div>
      <div>
        {comment.backer}
      </div>
      <div>
        {comment.comment}
      </div>
    </div>

  </div>
);

export default CommentEntry;
