import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header.js';
import { SuperHeader, Title, Score } from './Header.styled.js';

let wrapper = shallow(
  <Header
    userName="testUser"
    score="4500"
    title="This is a cool post"
  />
);

describe('Header', () => {
  it('should render the userName passed in from props', () => {
    expect(wrapper.find(SuperHeader).text()).toEqual("testUser");
  });

  it('should render the post title passed in from props', () => {
    expect(wrapper.find(Title).text()).toEqual("This is a cool post");
  });

  it('should format the score  passed in from props to use k for thousands', () => {
    expect(wrapper.find(Score).text()).toEqual("4.5k");
  });
});
