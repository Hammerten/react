import React, { useState, useEffect } from "react";
import UserInput from "./UserInput/UserInput";
import UserList from "./UserList/UserList";

function UserContent(props) {
  const users = props.users;
  const { addUser, deleteUser } = props.userFunctions;
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    setUserList(users);
  }, [users]);

  function handleDelete(curUser) {
    deleteUser(curUser).then((res) => {
      if (res.status === 204) {
        alert(`User with ID: ${curUser.id} has been successfully deleted`);
      }
      const newUserList = userList.filter((user) => user.id !== curUser.id);
      setUserList(newUserList);
    });
  }

  return (
    <div>
      <UserInput addUser={addUser} />
      <div className="user-container">
        {userList.map((user) => {
          return (
            <UserList
              key={`${user.last_name}--${user.id}`}
              user={user}
              handleDelete={handleDelete}
            />
          );
        })}
      </div>
    </div>
  );
}

export default UserContent;
