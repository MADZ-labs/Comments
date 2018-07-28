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
  padding: 0px 1.8rem, 1.8rem;
  box-sizing: border-box;
`;

const FAQ = styled.div`
  width: 33.333333%;
  float: right;
  box-sizing: border-box;
  border-left: 0.3rem solid #DCDEDD;
  padding: 1.2rem 0rem 1.2rem 1.8rem;
`;

const CommentBox = styled.div`
  margin-right: 20px;
  margin-bottom: 4.2rem;
  background: #F0F0F0;
  text-align: center;
  padding: 20px;
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
          <FAQ>
            Use this space to cheer the creator along, and talk to your fellow backers.
            <div>
              <br />
              Have a question?
            </div>
            <div>
              <a href="http://">
              Check out the FAQ
              </a>
            </div>
          </FAQ>
          <AllComments className="comment-section">
            <CommentBox>
              <div>
                Only backers can post comments.
              </div>
            </CommentBox>
            {comments.map((comment, ind) => (
              <CommentEntry key={ind} comment={comment} />
            ))}
          </AllComments>
        </InnerSec>
      </Section>
    );
  }
}
