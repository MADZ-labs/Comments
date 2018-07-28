import React from 'react';
import moment from 'moment';
import styled from 'styled-components';

const Comment = styled.div`
  padding: 1.8rem 20px 1.8rem
  margin-bottom: 1.8rem;
`;

const MainComment = styled.div`
  padding-top: 5px;
  padding-left: 1.8rem;
  margin-left: 1.8rem;
`;

const Author = styled.span`
  font-weight: bold;
`;

const Backer = styled.span`
  padding: 5px 7px;
  background-color: #037362;
  border-radius: 0;
  color: #FFFFFF;
  margin-left: 5px;
  font-size: 12px !important;
  line-height: 1.1em;
`;

const Image = styled.img`
  height: 30px;
  width: auto;
  float: left;
  border-radius: 50%;
`;

const Date = styled.span`
  font-size: 12px;
  color: #3D3D66;
  margin-left: 10px;
`;

const Text = styled.p`
  word-wrap: break-word;
  margin-bottom: 5px;
  color: #020621;
  font-size: 14px;
`;

const CommentEntry = ({ comment }) => (
  <Comment>
    <div>
      <Image src={comment.avatar} alt="" />
    </div>
    <MainComment>
      <div>
        <Author>
          {comment.username}
        </Author>
        <Backer>
          {comment.backer}
        </Backer>
        <Date>
          {moment(comment.date).startOf('hour').fromNow()}
        </Date>
      </div>
      <Text>
        {comment.comment}
      </Text>
    </MainComment>
  </Comment>
);

export default CommentEntry;
