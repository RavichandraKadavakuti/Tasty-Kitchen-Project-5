import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import PopResEachItem from "./Components/PopResEachItem";
import Cart from "./Components/Cart";
import store from "./Components/ReduxStore/store";
import { Provider } from "react-redux";

const App = () => (
  <Switch>
    <Provider store={store}>
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      <Route exact path="/restaurants-list/:id" component={PopResEachItem} />
      <Route exact path="/cart" component={Cart} />
    </Provider>
  </Switch>
);

export default App;
