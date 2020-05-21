import React, { useContext } from "react";
import { AuthContext } from "../../services/auth";

function Header() {
  const auth = useContext(AuthContext);
  return (
    <nav className="navbar navbar-light bg-primary">
      <div className="container">
        <button
          onClick={() => auth.logOut()}
          type="button"
          className="btn btn-danger ml-auto"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

export default Header;
