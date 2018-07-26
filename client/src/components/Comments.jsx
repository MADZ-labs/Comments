import React, { Component } from 'react';
import axios from 'axios';
import Log from 'log';
import CommentEntry from './commentEntry';

const log = new Log('info');

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
        log.info(err);
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
          {comments.map((comment, ind) =>
            <CommentEntry 
              key={ind} 
              comment={comment} 
            />
          )}
        </div>
      </div>
    );
  }
}
