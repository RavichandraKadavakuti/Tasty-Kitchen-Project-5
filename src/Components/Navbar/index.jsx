import React, { useEffect } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useSelector } from "react-redux";
import Cookies from "js-cookie";

const Navbar = (props) => {
  const cart = useSelector((store) => store.cart.items);
  const cartLength = cart.length;
  const navigate = useNavigate();

  const logout = () => {
    const { history } = props;
    Cookies.remove("jwt_token");
    navigate("/login");
  };
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow rounded">
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
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/cart" className="nav-link">
                  Cart{" "}
                  {cartLength > 0 && <b className="text-dark">{cartLength}</b>}
                </NavLink>
              </li>
              <li className="nav-item nav-link">
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={logout}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
