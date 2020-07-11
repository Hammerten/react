import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AuthGuard from "./services/auth";
import "./index.css";

ReactDOM.render(
  <AuthGuard>
    <App />
  </AuthGuard>,
  document.getElementById("app")
);
