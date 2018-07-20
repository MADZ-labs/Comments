import React from 'react';
import ReactDOM from 'react-dom';
import '../stylesheets/main.scss'

class App extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }

  render() {
    return (
      <div>
        goodbye
        <div>react</div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));
