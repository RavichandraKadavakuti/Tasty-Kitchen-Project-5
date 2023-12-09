import React from "react";
import { NavLink, Link } from "react-router-dom/cjs/react-router-dom.min";
import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary shadow rounded fixed-top">
      <div className="container-fluid">
        <Link to="/">
          <div className="d-flex align-items-center">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1676706562/Frame_274_m9mhjd.png"
              alt="navbar-logo"
              className="navbar-brand"
            />
            <h6 className="navbar-brand">Tasty Kitchen</h6>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="navbar-collapse collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav align-items-lg-center">
            <li className="nav-item">
              <NavLink exact to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/cart" className="nav-link">
                Cart
              </NavLink>
            </li>
            <li className="nav-item nav-link">
              <button type="button" className="btn btn-warning">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
