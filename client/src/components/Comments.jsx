import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CommentEntry from './commentEntry';

const AllComments = styled.div`
  width: 66.6666667%;
  float: left;
`;

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  componentDidMount() {
    this.getComments();
  }

  getComments() {
    axios.get('/comments')
      .then((response) => {
        this.setState({
          comments: response.data,
        });
      })
      .catch((err) => {
      });
  }

  render() {
    const { comments } = this.state;
    return (
      <AllComments className="comment-section">
        {comments.map((comment, ind) => (
          <CommentEntry key={ind} comment={comment} />
        ))}
      </AllComments>
    );
  }
}
