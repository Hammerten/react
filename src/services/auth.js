import React, { useState, useEffect } from "react";
import { apiUrl } from "../configure.json";
import Axios from "axios";

export const AuthContext = React.createContext({
  isAuthenticated: "false",
  authenticate(user) {},
  registerUser(user) {},
  logOut() {},
});

function AuthComponent(props) {
  const prevAuth = window.localStorage.getItem("token") || "false";
  const [authenticated, setAuthenticated] = useState(prevAuth);

  useEffect(() => {
    window.localStorage.setItem("token", authenticated);
  }, [authenticated]);

  function authHandler(user) {
    Axios.post(`${apiUrl}login`, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuthenticated(res.data.token);
        alert("თქვენ წარმატებით გაიერეთ ავტორიზაცია");
      })
      .catch((error) => {
        alert("ასეთი იმეილი ან პაროლი არ არსებობს");
      });
  }

  function registerHandler(user) {
    Axios.post(`${apiUrl}register`, user)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuthenticated(res.data.token);
        alert("თქვენ წარმატებით გაიერეთ რეგისტრაცია");
      })
      .catch((error) => {
        alert("მოხდა შეცდომა");
      });
  }

  function logOutHandler() {
    localStorage.setItem("token", "false");
    setAuthenticated("false");
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: authenticated,
        authenticate(user) {
          authHandler(user);
        },
        registerUser(user) {
          registerHandler(user);
        },
        logOut() {
          logOutHandler();
        },
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthComponent;
