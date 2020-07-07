import React from "react";

function Header({ navTitle, githubUser, apiUrl }) {
  return (
    <nav className="navbar navbar-light">
      <div
        style={{ justifyContent: "flex-end", padding: "0.5rem" }}
        className="nav-container container"
      >
        <div>
          <a href={githubUser}>
            <button className="btn btn-dark mr-3" type="button">
              Github
            </button>
          </a>
          <a href={apiUrl}>
            <button type="button" className="btn btn-info">
              API
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Header;
