import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Axios from "axios";
import { apiUrl } from "./configure.json";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const auth = {
  isAuthenticated: false,
  authenticate(user) {
    Axios.post(`${apiUrl}login`, user)
      .then((res) => {
        auth.authenticated = true;
        localStorage.setItem("token", res.data.token);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  register(user) {
    Axios.post(`${apiUrl}register`, user).then((res) => {
      console.log(res);
    });
  },
};

function App() {
  const [authenticated, setAuthenticated] = useState(null);

  function login(user) {
    auth.authenticate(user);
  }

  function register(user) {
    auth.register(user);
  }

  useEffect(() => {
    setAuthenticated(auth.isAuthenticated);
  }, [login]);

  return (
    <div>
      <Login login={login} />
      <Register registerUser={register} />
    </div>
  );
}

export default App;
