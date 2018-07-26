import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Comments from './Comments';

import '../stylesheets/main.scss';
/* eslint-env browser */
export default class App extends Component {
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
        <h1>Comment Section</h1>
        <div>
          <Comments comments={comments} />
        </div>
        <div>
          goodbye
        </div>
        <div>
          react
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
