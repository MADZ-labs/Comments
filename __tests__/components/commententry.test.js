import React from 'react';
import { shallow, mount, render } from 'enzyme';
import CommentEntry from '../../client/src/components/commentEntry'

const comment = {
  avatar: 'avatar',
  username: 'username',
  backer: 'backer',
  date: 'date',
  comment: 'comment',
}

describe('<CommentEntry />', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<CommentEntry comment={comment}/>); });

  it('should render without error', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have props', () => {
    expect(wrapper.props().comment).toEqual(comment);
  });
});