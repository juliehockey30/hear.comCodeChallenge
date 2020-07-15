import React from 'react';
import { shallow } from 'enzyme';
import PostBody from './PostBody.js';
import { CommentsWrapper, PostLine, Icon } from './PostBody.styled.js';
import commentIcon from '../../images/commentIcon.png';

let wrapper = shallow(
  <PostBody
    postBody="This is a cool post. Edit: This is a really cool post. Edit: This is the BEST post."
    numOfComments={8}
  />
);

describe('PostBody', () => {
  it('render postBody passed in from props with edits on their own line(s)', () => {
    expect(wrapper.find(PostLine).length).toEqual(3);
    expect(wrapper.find(PostLine).at(0).text()).toEqual("This is a cool post. ");
    expect(wrapper.find(PostLine).at(1).text()).toEqual("Edit: This is a really cool post. ");
    expect(wrapper.find(PostLine).at(2).text()).toEqual("Edit: This is the BEST post.");
  });

  it('render number of comments passed in from props with comment icon', () => {
    expect(wrapper.find(CommentsWrapper).text()).toEqual("8 Comments");
    expect(wrapper.find(Icon).props().src).toEqual(commentIcon);
  });
});
