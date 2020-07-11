import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import CommentContainer from "../../containers/CommentContainer";

function DetailedPost(props) {
  let history = useHistory();
  let location = useLocation();
  const post = location.state ? location.state.post : "";
  const [userValue, setUserValue] = useState(post);

  return (
    <div className="col-md-12 col-sm-12">
      <div className="post border rounded">
        <h4 className="post-title">{post.title}</h4>
        <p>{post.body}</p>
      </div>
      <CommentContainer postId={post.id} />
    </div>
  );
}

export default DetailedPost;
