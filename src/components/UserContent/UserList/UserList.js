import React from "react";
import { Link } from "react-router-dom";

function UserList(props) {
  const { user, handleDelete } = props;
  return (
    <div className="card" style={{ flexBasis: "24%" }}>
      <div className="user-info-container card-body">
        <h5 className="card-title text-center mb-4">
          {user.first_name + " " + user.last_name}
        </h5>
        <h6 className="card-subtitle mt-2 text-muted">
          ID: <span className="text-info">{user.id}</span>
        </h6>
        <h6 className="card-subtitle mt-2 text-muted">
          Name: <span className="text-info">{user.first_name}</span>
        </h6>
        <h6 className="card-subtitle mt-2 text-muted">
          Surname: <span className="text-info">{user.last_name}</span>
        </h6>
        <h6 className="card-subtitle mt-2 text-muted mb-4">
          Email: <span className="text-info">{user.email}</span>
        </h6>
        <div className="button-container">
          <Link
            to={{
              pathname: "/update",
              state: {
                userName: user.first_name,
                updateUser: "hi",
              },
            }}
          >
            <button type="button" className="btn btn-success btn-block">
              Update
            </button>
          </Link>
          <button
            onClick={() => handleDelete(user)}
            type="button"
            className="btn btn-danger btn-block mt-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserList;
