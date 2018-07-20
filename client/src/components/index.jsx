import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/main.scss';
/* eslint-env browser */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <h1>Comment Section</h1>
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
