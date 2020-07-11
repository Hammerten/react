import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl, apiToken } from "../configure.json";
import User from "../components/User";

function UserContainer(props) {
  const userId = props.userId;
  const [user, setUser] = useState({});

  useEffect(() => {
    axios
      .get(`${apiUrl}users/${userId}`, {
        headers: {
          Authorization: `Bearer ${apiToken}`,
        },
      })
      .then((res) => setUser(res.data.result));
  }, []);

  return <User user={user} />;
}

export default UserContainer;
