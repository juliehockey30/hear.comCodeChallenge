import React, { Component } from 'react';
import Comment from './comment/Comment.js';
import { CommentSectionWrapper } from './CommentsSection.styled.js';

class CommentsSection extends Component {
  constructor(props){
    super(props);
    this.state = {
      comments: this.props.comments
    };

    this.deleteComment = this.deleteComment.bind(this);

  }

  componentWillMount() {
    this.sortComments();
  }

  //Re-order comments array so that threaded comments appear directly after parent comment(s)
  sortComments() {
    const allComments = this.state.comments;
    let sortedComments = [];
    let threadedComments = [];

    //Separate threaded comments (comments that have a parent_id)
    //  from comments on the original post
    allComments.forEach(comment => {
      if(comment.parent_id) {
        threadedComments.push(comment);
      } else {
        sortedComments.push(comment);
      }
    });

    //Insert the threaded comments directly after their "parent" comment
    threadedComments.forEach(nestedComment => {
      const parentId = nestedComment.parent_id;
      const parentIndex = sortedComments.map(sc => sc.id).indexOf(parentId);

      //Use splice to insert the threaded comment in the array directly after its parent comment
      sortedComments.splice(parentIndex+1, 0, nestedComment);
    });

    //Remove deleted comments
    for (var i = 0; i < sortedComments.length; i++) {
      if (sortedComments[i].author && sortedComments[i].author === "[deleted]") {
          sortedComments.splice(i, 1);
          break;
      }
    }

    this.setState({ comments: sortedComments }, () => {
      this.props.updateCommentsCount(this.state.comments.length);
    });
  }

  formatTimestamp(utcEpochString) {
    var timestamp = utcEpochString;
    var date = new Date(timestamp * 1000);

    debugger
    return {
      year: date.getYear(),
      month: date.getMonth()
    };
  }

  getTimeAgoInMonths(commentDate) {
    let formattedDate = this.formatTimestamp(commentDate);
    let now = new Date();

    var months;
    months = (now.getYear() - formattedDate.year) * 12;
    months -= formattedDate.month;
    months += now.getMonth();
    return months <= 0 ? 0 : months;
  }

  renderComments() {
    const commentsArr = this.state.comments;
    return(
      commentsArr.map(comment =>
        <Comment
          userName={comment.author}
          timestamp={this.getTimeAgoInMonths(comment.created_utc)}
          comment={comment.body}
          depth={comment.depth}
          commentId={comment.id}
          deleteComment={this.deleteComment}
          points={comment.ups}
        />
      )
    )
  }

  deleteComment(idToBeDeleted) {
    let currentComments = this.state.comments;

    for (var i = 0; i < currentComments.length; ++i) {
      if (currentComments[i].id === idToBeDeleted) {
          currentComments.splice(i, 1);
      }
    }

    this.setState({ comments: currentComments }, () => {
      this.props.updateCommentsCount(this.state.comments.length);
    });
  }

  render() {
    return (
      <CommentSectionWrapper>
          {this.renderComments()}
      </CommentSectionWrapper>
    );
  }
}

export default CommentsSection;
