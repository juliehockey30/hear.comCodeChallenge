import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js'
import Header from './components/header/Header.js';
import PostBody from './components/postBody/PostBody.js';
import CommentsSection from './components/commentsSection/CommentsSection.js';

let wrapper = shallow(
  <App />
);

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
  }
];

const mockSuccessResponse = {
  subreddit_name_prefixed: "r/user1",
  score: 31000,
  title: "A really cool post",
  selftext: "This is a really cool post about something really cool",
  comments: comments,
};

describe('App', () => {
  it('Passes data from fetch response to components', () => {
    const mockJsonPromise = Promise.resolve(mockSuccessResponse);
    const mockFetchPromise = Promise.resolve({
      json: () => mockJsonPromise,
    });

    jest.spyOn(global, 'fetch').mockImplementation(() => mockFetchPromise);

    setTimeout(() => {
      expected(wrapper.find(Header).props().userName).toBe("r/user1");
      expected(wrapper.find(Header).props().score).toBe(31000);
      expected(wrapper.find(Header).props().title).toBe("A really cool post");
      expected(wrapper.find(PostBody).props().postBody).toBe("This is a really cool post about something really cool");
      expected(wrapper.find(PostBody).props().numOfComments).toBe(2);
      expected(wrapper.find(CommentsSection).props().comments).toBe(comments);
    }, 100);
  })
});
