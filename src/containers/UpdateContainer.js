import React from "react";
import axios from "axios";
import { apiUrl } from "../configure.json";
import Update from "../components/Update/Update";

function UpdateContainter() {
  async function updateUser(user) {
    const { data } = await axios.put(`${apiUrl}users`, user);
    return data;
  }

  return <Update updateUser={updateUser} />;
}

export default UpdateContainter;
