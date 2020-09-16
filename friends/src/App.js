import React from "react";
import { Route, Switch, Link } from "react-router-dom";

import Login from "./components/Login";
import FriendsList from "./components/FriendsList";
import PrivateRoute from "./components/PrivateRoute";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="navBox">
        <h1>Welcome To Friends List</h1>
        <nav>
          <Link className="Link" to="/login">Login</Link> &nbsp;
          <Link className="Link"to="/protected">FriendsList</Link>
        </nav>
      </div>
      <Switch>
        <PrivateRoute exact path="/protected" component={FriendsList} />
        <Route path="/login" component={Login} />
        <Route component={Login} />
      </Switch>
    </div>
  );
}

export default App;
