import React, { useContext } from "react";
import Nav from "./components/Nav";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthContext } from "./services/auth";
import "./App.css";
import PrivateRoute from "./services/PrivateRoute";
import PostContainer from "./containers/PostContainer.js";
import DetailedPost from "./components/DetailedPost";
import AlbumContainer from "./containers/AlbumContainer";

function App() {
  const auth = useContext(AuthContext);
  return (
    <Router>
      {auth.isAuthenticated !== "false" && <Nav />}
      <div className="main-container container">
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <PrivateRoute path="/posts/:id">
            <DetailedPost />
          </PrivateRoute>
          <PrivateRoute path="/albums/:id">
            {/* <DetailedAlbum/> */}
          </PrivateRoute>
          <PrivateRoute path="/albums">
            <AlbumContainer />
          </PrivateRoute>
          <PrivateRoute exact path="/posts">
            <PostContainer />
          </PrivateRoute>
          <PrivateRoute exact path="/">
            <PostContainer />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
