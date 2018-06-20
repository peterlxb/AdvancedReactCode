import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    let commentList;

    if (comments.length !== 0) {
      commentList = comments.map(comment => <li key={comment}>{comment}</li>);
    } else {
      commentList = <h4>Loading Comments</h4>;
    }

    return (
      <div>
        <h4>Comment List</h4>
        <ul>{commentList}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);
