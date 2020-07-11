import React, { useState, useEffect } from "react";

function User(props) {
  const user = props.user;

  return (
    <p>
      {user.first_name} {user.last_name}
    </p>
  );
}

export default User;
