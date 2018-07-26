import React, { Component } from 'react';
import CommentEntry from './commentEntry';

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
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
