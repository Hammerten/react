import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContainer from "../../containers/UserContainer";

function Post(props) {
  const post = props.post;

  return (
    <div className="col-md-6 col-sm-12">
      <Link
        style={{
          textDecoration: "none",
          color: "black",
          padding: "0px",
          margin: "0px",
        }}
        to={{
          pathname: `/posts/${post.id}`,
          state: { post },
        }}
      >
        <div className="post border rounded">
          <h4 className="post-title">{post.title}</h4>
          <p>{post.body}</p>
          <UserContainer userId={post.user_id} />
        </div>
      </Link>
    </div>
  );
}

export default Post;
