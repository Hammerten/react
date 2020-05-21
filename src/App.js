import React, { useContext } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import UserContainer from "./containers/UserContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./services/PrivateRoute";
import UpdateContainer from "./containers/UpdateContainer";
import Header from "./components/Header/Header";
import { AuthContext } from "./services/auth";

function App() {
  const auth = useContext(AuthContext);
  return (
    <Router>
      {auth.isAuthenticated !== "false" && <Header />}
      <div className="container">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/update">
            <UpdateContainer />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <UserContainer />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
