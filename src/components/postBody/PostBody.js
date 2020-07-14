import React, { Component } from 'react';
import commentIcon from '../../images/commentIcon.png';
import {
  Wrapper,
  PostLine,
  CommentsWrapper,
  Icon
} from './PostBody.styled.js';

class PostBody extends Component {
  constructor(props){
    super(props);

    this.postAndEditsArr = [];

  }

  componentWillMount() {
    this.dividePostEdits();
  }

  //separate edits from original post since it comes back as 1 string in the response
  dividePostEdits() {
    this.postAndEditsArr = this.props.postBody.split(/(?=Edit)/)
  }

  renderPostsAndEdits() {
    return(
      this.postAndEditsArr.map(post => <PostLine>{post}</PostLine>)
    )
  }

  render() {
    return (
      <Wrapper>
        {this.renderPostsAndEdits()}
        <CommentsWrapper>
          <Icon src={commentIcon}/>
          {`${this.props.numOfComments} Comments`}
        </CommentsWrapper>
      </Wrapper>
    );
  }
}

export default PostBody;
