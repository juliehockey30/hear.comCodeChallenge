import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Comment from './Comment.js';
import {
  CommentWrapper,
  CommentHeaderWrapper,
  User,
  PointsAndTimestamp,
  CommentBody,
  TrashIcon,
} from './Comment.styled.js';

let wrapper = shallow(
  <Comment
    userName="user1"
    timestamp="11"
    comment="This was a great day. Edit: This was the BEST day."
    depth={1}
    commentId="123"
    deleteComment={jest.fn()}
    points={31}
  />
);

describe('Comment', () => {
  it('should display the userName, points and timestamp passed in from props', () => {
    expect(wrapper.find(User).text()).toEqual("user1");
    expect(wrapper.find(PointsAndTimestamp).text()).toEqual("31 points - 11 months ago");
  });

  it('should extra indent the comment depending on its depth', () => {
    expect(wrapper.find(CommentWrapper)).toHaveStyleRule("margin", "24px 16px 0 40px");
  });

  it('should render edits to comments on their own line', () => {
    expect(wrapper.find(CommentBody).length).toBe(2);
    expect(wrapper.find(CommentBody).at(0).text()).toBe("This was a great day. ");
    expect(wrapper.find(CommentBody).at(1).text()).toBe("Edit: This was the BEST day.");
  });
});
