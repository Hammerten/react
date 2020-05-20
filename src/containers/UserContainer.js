import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "../configure.json";
import UserContent from "../components/UserContent/UserContent";

function UserContainer() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get(`${apiUrl}users`).then((res) => {
      for (let i = 1; i < res.data.total_pages + 1; i++) {
        axios.get(`${apiUrl}users?page=${i}`).then((list) => {
          setUsers((users) => [...users, ...list.data.data]);
        });
      }
    });
  }, []);

  async function addUser(user) {
    const { data } = await axios.post(`${apiUrl}users`, user);
    return data;
  }

  async function deleteUser(user) {
    const res = await axios.delete(`${apiUrl}users`, user);
    return res;
  }

  return (
    <UserContent
      users={users}
      userFunctions={{
        addUser,
        deleteUser,
      }}
    />
  );
}

export default UserContainer;
