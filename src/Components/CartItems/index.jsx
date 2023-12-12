import React from "react";

//col-12 col-lg-5 col-xl-3

const CartItems = ({ each }) => {
  return (
    <li className="d-flex w-100 align-items-lg-center justify-content-lg-between m-2 border border-dark rounded p-2">
      <div className="d-flex align-items-lg-center col-lg-4">
        <img
          src={each.imageUrl}
          alt={each.id}
          className="pop-res-img rounded"
        />
        <h6 className="d-none d-lg-block ms-lg-2">{each.name}</h6>
      </div>
      <div className="ms-2 ms-lg-0">
        <h6 className="d-lg-none">{each.name}</h6>
        <span className="d-lg-none">
          <i className="fa-solid fa-indian-rupee-sign me-1"></i>
          {each.cost}
        </span>
        <br />
        <div>
          <button type="button" className="btn btn-dark me-3">
            -
          </button>
          <span>{each.cartCount}</span>
          <button type="button" className="btn btn-dark ms-3">
            +
          </button>
        </div>
      </div>
      <div className="d-none d-lg-block">
        <span>
          <i className="fa-solid fa-indian-rupee-sign me-1"></i>
          {each.cost}
        </span>
      </div>
    </li>
  );
};

export default CartItems;
