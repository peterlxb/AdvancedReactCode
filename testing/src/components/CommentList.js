import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    const { comments } = this.props;
    let commentList;

    if (comments.length != 0) {
      commentList = comments.map((comment, index) => (
        <li key={index}>{comment}</li>
      ));
    } else {
      commentList = <h4>Loading Comments</h4>;
    }

    return <div>{commentList}</div>;
  }
}

const mapStateToProps = state => ({
  comments: state.comments
});

export default connect(mapStateToProps)(CommentList);
