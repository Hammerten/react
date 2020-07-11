import React, { useState, useEffect } from "react";
import { apiUrl, apiFormat, apiToken } from "../configure.json";
import Axios from "axios";

export const AuthContext = React.createContext({
  isAuthenticated: "false",
  userId: "false",
  authenticate(user) {},
  registerUser(user) {},
  logOut() {},
});

function AuthComponent(props) {
  const prevAuth = window.localStorage.getItem("token") || "false";
  const prevUserId = window.localStorage.getItem("userId") || "false";
  const [authenticated, setAuthenticated] = useState(prevAuth);
  const [userIdentity, setUserIdentity] = useState(prevUserId);

  useEffect(() => {
    window.localStorage.setItem("token", authenticated);
  }, [authenticated]);

  function authHandler(user) {
    const newToken = "authorized";
    localStorage.setItem("token", newToken);
    setAuthenticated(newToken);
    alert("თქვენ წარმატებით გაიერეთ ავტორიზაცია");
  }

  function registerHandler(user) {
    const newToken = "authorized";
    Axios.post(`${apiUrl}users`, user, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    })
      .then((res) => {
        localStorage.setItem("token", newToken);
        setAuthenticated(newToken);
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
