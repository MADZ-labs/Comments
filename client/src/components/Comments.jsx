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

  getComments() {
    axios.get('/comments')
      .then((response) => {
        console.log(response);
        this.setState({
          comments: response,
        });
      })
      .catch((err) => {
        console.log(err);
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
          <CommentEntry />
        </div>
      </div>
    );
  }
}
