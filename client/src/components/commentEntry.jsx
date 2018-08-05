import React, { Component } from 'react';
import moment from 'moment';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const MainComment = styled.div`
  padding-top: 5px;
  padding-left: 1.8rem;
  margin-left: 1.8rem;
`;

const Author = styled.span`
  font-weight: bold;
`;

const Image = styled.img`
  height: 30px;
  width: auto;
  float: left;
  border-radius: 50%;
`;

const Date = styled.span`
  font-size: 12px;
  color: #3d3d66;
  margin-left: 10px;
`;

const Text = styled.p`
  word-wrap: break-word;
  margin-bottom: 5px;
  color: #020621;
  font-size: 14px;
`;

const RelDiv = styled.div`
  &&& {
    position: relative;
    left: 30px;
    bottom: 55px;
  }
`;
const BackerDiv = styled.div`
  &&& {
    display: inline-block;
    position: absolute;
    background-color: #000;
    color: #FFF;
    max-width: 190px;
    padding: 5px 8px 4px 8px;
    text-align: center;
    opacity: 0.8;
    border-radius: 3px; 
    font-size: 12px;
  }
`;

export default class CommentEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed: false,
    };
    this.hoverOn = this.hoverOn.bind(this);
    this.hoverOff = this.hoverOff.bind(this);
  }

  hoverOn() {
    this.setState({
      displayed: true,
    });
  }

  hoverOff() {
    this.setState({
      displayed: false,
    });
  }

  render() {
    let backerDiv;
    const { comment } = this.props;
    const { displayed } = this.state;

    const Comment = styled.div`
      padding: 1.8rem 20px 1.8rem
      margin-bottom: 1.8rem;
      margin-right: 20px;
      background: ${comment.backer.includes('creator') ? '#e2e6ff' : '#FFFF'}
      border: ${comment.backer.includes('creator') ? '1px solid rgba(43,96,255,0.15)' : ''}
    `;

    const Backer = styled.span`
      padding: 5px 7px;
      background-color: ${comment.backer.includes('creator') ? '#2b52ef' : '#037362'};
      border-radius: 0;
      color: #ffffff;
      margin-left: 5px;
      font-size: 12px !important;
      line-height: 1.1em;
    `;

    if (displayed) {
      backerDiv = (
        <BackerDiv>
          <div>
            Super! This backer has supported a lot of projects.
          </div>
        </BackerDiv>
      );
    }

    return (
      <Comment>
        <RelDiv>
          {backerDiv}
        </RelDiv>
        <div>
          <Image src={comment.avatar} alt="" />
        </div>
        <MainComment>
          <div>
            <Author>
              {comment.username}
            </Author>
            <Backer onMouseEnter={this.hoverOn} onMouseLeave={this.hoverOff}>
              {comment.backer}
            </Backer>
            <Date>
              {moment(comment.date).startOf('hour').fromNow()}
            </Date>
          </div>
          <Text>
            {comment.comment}
          </Text>
        </MainComment>
      </Comment>
    );
  }
}

CommentEntry.propTypes = {
  comment: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
    backer: PropTypes.string,
    comment: PropTypes.string,
    date: PropTypes.string,
    project: PropTypes.shape({
      projectName: PropTypes.string,
    }),
  }).isRequired,
};
