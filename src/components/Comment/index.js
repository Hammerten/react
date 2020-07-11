import React, { useState, useEffect } from "react";

function Post(props) {
  const comment = props.comment;
  console.log(comment);

  return (
    <div className="col-md-12 col-sm-12">
      <div className="comment">
        <h6 className="mb-1">{comment.name}</h6>
        <p>{comment.body}</p>
      </div>
    </div>
  );
}

export default Post;
