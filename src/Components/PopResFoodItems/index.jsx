import React from "react";

const PopResFoodItems = ({ each, addToCartBtnToggle }) => {
  const onAddCart = (each) => {
    addToCartBtnToggle(each);
  };
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
        <span>
          <i className="fa-solid fa-indian-rupee-sign me-1"></i>
          {each.cost}
        </span>
        <br />
        <i className="fa-solid fa-star me-1"></i>
        <span>{each.rating}</span>
        <br />
        {!each.addCart && (
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => onAddCart(each)}
          >
            Add
          </button>
        )}
        {each.addCart && (
          <div>
            <button type="button" className="btn btn-dark me-3">
              -
            </button>
            <span>{each.cartCount}</span>
            <button type="button" className="btn btn-dark ms-3">
              +
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default PopResFoodItems;
