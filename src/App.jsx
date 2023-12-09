import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/" component={Home} />
  </Switch>
);

export default App;
