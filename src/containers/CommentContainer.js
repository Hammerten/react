import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, apiToken } from "../configure.json";
import CommentCatalog from "../components/CommentCatalog";

function CommentContainer(props) {
  const postId = props.postId;
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}comments?post_id=${postId}`, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      })
      .then((res) => setComments(res.data.result));
  }, []);

  return <CommentCatalog comments={comments} />;
}

export default CommentContainer;
