import React from 'react';
import { shallow } from 'enzyme';
import CommentsSection from './CommentsSection.js';
import Comment from './comment/Comment.js';

const comments = [
  {
    body: "comment one",
    id: "123",
    depth: 0,
    author: "user1",
    ups: 5
  },
  {
    body: "comment two Edit: comment 2",
    id: "456",
    depth: 0,
    author: "user2",
    ups: 56
  },
  {
    body: "comment three",
    id: "789",
    depth: 1,
    author: "user3",
    ups: 2
  },
  {
    body: "[deleted]",
    id: "000",
    depth: 1,
    author: "[deleted]",
    ups: 0
  }
];

let wrapper = shallow(
  <CommentsSection
    comments={comments}
    updateCommentsCount={jest.fn()}
  />
);

describe('CommentsSection', () => {
  it('should render all comments (except delted ones) that are passed from props', () => {
    expect(wrapper.find(Comment).length).toEqual(3);
  });

  it('should sort the comments so nested comments appear directly after their parent', () => {
    const instance = wrapper.instance();
    instance.sortComments();

    setTimeout(() => {
      expect(wrapper.find(Comment).at(0).props().userName).toEqual("user1");
      expect(wrapper.find(Comment).at(1).props().userName).toEqual("user3");
    }, 100);
  });
});
