import React, { useContext } from "react";
import { AuthContext } from "../../services/auth";
import { Link } from "react-router-dom";

function Nav() {
  const categories = ["Posts", "Albums"];

  const auth = useContext(AuthContext);
  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {categories.map((category, i) => {
              return (
                <Link
                  to={category}
                  key={category}
                  className="nav-item nav-link"
                >
                  {category}
                </Link>
              );
            })}
          </div>
        </div>
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

export default Nav;
