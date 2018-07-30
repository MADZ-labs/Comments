import React from "react";
import { shallow, mount } from "enzyme";
import App from '../../client/src/components/App'

jest.mock('react-dom');

describe("App Component", () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<App/>); });

  it("should render without throwing an error", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
