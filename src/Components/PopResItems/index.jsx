import React from "react";
import "./index.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PopResItems = ({ each }) => {
  return (
    <li className="col-12 col-lg-5 col-xl-3 m-2 border border-dark rounded p-2">
      <Link to={`/restaurants-list/${each.id}`} className="d-flex">
        <div className="d-flex col-5">
          <img
            src={each.imageUrl}
            alt={each.id}
            className="pop-res-img rounded"
          />
        </div>
        <div className="col-7 ms-2">
          <h6>{each.name}</h6>
          <h6>{each.menuType}</h6>
          <div>
            <i className="fa-solid fa-star me-1"></i>
            <span>{each.rating}</span> ({each.totalReviews} Rating)
          </div>
        </div>
      </Link>
    </li>
  );
};

export default PopResItems;
