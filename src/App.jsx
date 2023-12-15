import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Home from "./Components/Home";
import Cart from "./Components/Cart";
import PopResFoodItems from "./Components/PopResEachItem";
import ProtectedRoutes from "./Components/ProtectedRoutes";

import { Provider } from "react-redux";
import store from "./Components/ReduxStore/store";
import NotFoundPage from "./Components/NotFoundPage";

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/restaurants-list/:id"
          element={
            <ProtectedRoutes>
              <PopResFoodItems />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          }
        />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
