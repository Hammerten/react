import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, apiToken } from "../configure.json";
import PostCatalog from "../components/PostCatalog";

function PostContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}posts`, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      })
      .then((res) => setPosts(res.data.result));
  }, []);

  return <PostCatalog posts={posts} />;
}

export default PostContainer;
