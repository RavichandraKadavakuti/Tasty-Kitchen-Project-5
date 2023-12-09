import React from "react";
import './index.css'

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column align-items-center bg-dark text-light text-center rounded p-3 p-lg-5">
          <div className="d-flex align-items-center">
            <img
              src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1678093534/Group_7420_orzlwz.png"
              alt="footer logo"
              className="img-fluid me-3"
            />
            <h1>Tasty Kitchen</h1>
          </div>
          <p>The only thing we are serious about is food.Contact us on</p>

          <ul className="d-flex justify-content-between align-items-center col-8 col-sm-4">
            <li>
              <i className="fa-brands footer-icons fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands footer-icons fa-twitter"></i>
            </li>
            <li>
              <i className="fa-brands footer-icons fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands footer-icons fa-pinterest-p"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
