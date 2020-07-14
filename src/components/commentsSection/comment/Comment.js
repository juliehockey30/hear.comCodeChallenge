import React, { Component } from 'react';
import {
  CommentWrapper,
  CommentHeaderWrapper,
  User,
  PointsAndTimestamp,
  CommentBody,
  TrashIcon,
} from './Comment.styled.js';
import trash from '../../../images/trash.png';

class Comment extends Component {

  //separate edits from original comment since it comes back as 1 string
  //  in the comment body response
  divideCommentEdits() {
    return this.props.comment.split(/(?=Edit)/)
  }

  //Used to render edits for comments on their own lines
  renderCommentWithEdits() {
    let commentArr = this.divideCommentEdits();
    return(
      commentArr.map(comment => <CommentBody>{comment}</CommentBody>)
    )
  }

  render() {
    return (
      <CommentWrapper depth={this.props.depth}>
        <div>
          <CommentHeaderWrapper>
            <User>{this.props.userName}</User>
            <PointsAndTimestamp>
              {`${this.props.points} points - ${this.props.timestamp} months ago`}
            </PointsAndTimestamp>
          </CommentHeaderWrapper>
          {this.renderCommentWithEdits()}
        </div>
        <TrashIcon
          src={trash}
          onClick={() => this.props.deleteComment(this.props.commentId)}
        />
      </CommentWrapper>
    );
  }
}

export default Comment;
