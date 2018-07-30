import React, { Component } from 'react';
import styled from 'styled-components';
import Comments from './Comments';
import '../stylesheets/main.scss';

const Container = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1040px;
  padding-right: 1.8rem !important;
  padding-left: 1.8rem !important;
  margin-right: auto;
  margin-left: auto;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <section>
        <h1>Comment App</h1>
        <Container className='container'>
          <Comments />
        </Container>
      </section>
    );
  }
}

