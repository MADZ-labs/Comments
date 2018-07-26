import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Comments from './Comments';

import '../stylesheets/main.scss';
/* eslint-env browser */
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>Comment App</h1>
        <div>
          <Comments />
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
