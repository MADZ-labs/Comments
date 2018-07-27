import React, { Component } from 'react';
import axios from 'axios';
import CommentEntry from './commentEntry';

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
      <div>
        <h1>
          This is the comments section
        </h1>
        <div>
          {comments.map((comment, ind) => {
            return <CommentEntry key={ind} comment={comment} />;
          })}
        </div>
      </div>
    );
  }
}
