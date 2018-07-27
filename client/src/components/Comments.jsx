import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import CommentEntry from './commentEntry';

const Section = styled.div`
  margin-right: -1.8rem;
  margin-left: -1.8rem;
`;
const InnerSec = styled.div`
  padding-left: 1.8rem;
`;

const AllComments = styled.div`
  width: 66.6666667%;
  float: left;
  padding-left: 1.8rem !important;
  padding-right: 1.8rem !important;
  padding-bottom: 1.8rem !important;
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
      <Section>
        <InnerSec className="inner-sec">
          <AllComments className="comment-section">
            {comments.map((comment, ind) => (
              <CommentEntry key={ind} comment={comment} />
            ))}
          </AllComments>
        </InnerSec>
      </Section>
    );
  }
}
