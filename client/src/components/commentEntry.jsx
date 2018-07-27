import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Comment = styled.div`
  max-width: 1040px;
  margin-right: auto;
  margin-left: auto;
`;

const Div = styled.div`
  font-size: 12px;
`;

const Image = styled.img`
  height: 25px;
  width: auto;
`;

const Text = styled.div`
  font-size: 10px;
`;

const CommentEntry = ({ comment }) => (
  <Comment>
    <Div>
      <Image src={comment.avatar} alt="" />
      {comment.username}
      {comment.backer} 
      {moment(comment.date).startOf('hour').fromNow()}
    </Div>
    <Text>
      {comment.comment}
    </Text>
  </Comment>
);

export default CommentEntry;
