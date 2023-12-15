import React from "react";
import { useDispatch } from "react-redux";
import { add } from "../ReduxStore/cartItemsSlice";

const PopResFoodItems = ({ each }) => {
  const dispatch = useDispatch();

  const onAddCart = (each) => {
    dispatch(add(each));
  };
  return (
    <li className="d-flex col-12 col-lg-5 col-xl-3 m-2 border border-dark rounded p-2">
      <div className="d-flex">
        <img
          src={each.imageUrl}
          alt={each.id}
          className="pop-res-img rounded"
        />
      </div>
      <div className="ms-2">
        <h6>{each.name}</h6>
        <h6>{each.menu_type}</h6>
        <span>
          <i className="fa-solid fa-indian-rupee-sign me-1"></i>
          {each.cost}
        </span>
        <br />
        <i className="fa-solid fa-star me-1"></i>
        <span>{each.rating}</span>
        <br />

        <button
          type="button"
          className="btn btn-warning"
          onClick={() => onAddCart(each)}
        >
          Add
        </button>
      </div>
    </li>
  );
};

export default PopResFoodItems;
