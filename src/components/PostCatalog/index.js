import React, { useState, useEffect } from "react";
import Post from "../Post";

function PostCatalog(props) {
  const posts = props.posts;

  return (
    <div className="row">
      {posts.map((post) => {
        return <Post key={post.id} post={post} />;
      })}
    </div>
  );
}

export default PostCatalog;
