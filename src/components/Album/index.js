import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContainer from "../../containers/UserContainer";

function Post(props) {
  const album = props.album;

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
          pathname: `/albums/${album.id}`,
          state: { album },
        }}
      >
        <div className="post border rounded">
          <h4 className="post-title">{album.title}</h4>
          <UserContainer userId={album.user_id} />
        </div>
      </Link>
    </div>
  );
}

export default Post;
