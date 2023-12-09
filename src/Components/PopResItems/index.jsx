import React from "react";
import "./index.css";

const PopResItems = ({ each }) => {
  return (
    <li className="d-flex col-12 col-lg-5 col-xl-3 m-2 border border-dark rounded p-2">
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
    </li>
  );
};

export default PopResItems;
