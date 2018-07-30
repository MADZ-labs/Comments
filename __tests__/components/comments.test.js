import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Comments from '../../client/src/components/Comments'
import sinon from 'sinon';

describe('<Comments />', () => {
  let wrapper;
  beforeEach(() => { wrapper = mount(<Comments/>); });

  it('should render without throwing an error', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should render outer comment section', () => {
    expect((wrapper).find('.comment-section').hostNodes()).toHaveLength(1);
  });

  it('should render inner comment section', () => {
    expect((wrapper).find('.inner-sec').hostNodes()).toHaveLength(1);
  });

  it('should call componentDidMount', () => {
    sinon.spy(Comments.prototype, 'componentDidMount');
    const wrapper = mount(<Comments/>)
    expect(Comments.prototype.componentDidMount.calledOnce).toEqual(true);
  });
});
