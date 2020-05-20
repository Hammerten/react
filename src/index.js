import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AuthGuard from "./services/auth";

ReactDOM.render(
  <React.StrictMode>
    <AuthGuard>
      <App />
    </AuthGuard>
  </React.StrictMode>,
  document.getElementById("root")
);
