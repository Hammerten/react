import React, { useState, useEffect } from "react";
import Comment from "../Comment";

function CommentCatalog(props) {
  const comments = props.comments;

  return (
    <div className="row">
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}

export default CommentCatalog;
