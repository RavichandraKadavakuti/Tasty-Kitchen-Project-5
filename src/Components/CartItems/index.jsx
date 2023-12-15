import React from "react";
import { useDispatch } from "react-redux";
import { inc, dec } from "../ReduxStore/cartItemsSlice";

const CartItems = ({ each }) => {
  const dispatch = useDispatch();

  const onInc = (id) => {
    dispatch(inc(id));
  };

  const onDec = (id) => {
    dispatch(dec(id));
  };

  return (
    <li className="d-flex align-items-center justify-content-lg-between border border-dark rounded p-2 m-2">
      <div className="d-flex align-items-center col-lg-3">
        <img src={each.imageUrl} alt={each.name} className="pop-res-img me-3" />
        <h6 className="d-none d-lg-block">{each.name}</h6>
      </div>
      <div className="d-none d-lg-block d-lg-flex align-items-lg-center justify-content-lg-between col-6">
        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn btn-warning me-2"
            onClick={() => onDec(each.id)}
          >
            -
          </button>
          {each.quantity}
          <button
            type="button"
            className="btn btn-warning ms-2"
            onClick={() => onInc(each.id)}
          >
            +
          </button>
        </div>
        <div className="d-flex align-items-center">
          <i className="fa-solid fa-indian-rupee-sign"></i>
          <b>{each.cost}</b>
        </div>
      </div>
      <div className="d-lg-none">
        <h6 className="d-block d-lg-none">{each.name}</h6>

        <div className="d-flex align-items-center">
          <button
            type="button"
            className="btn btn-warning me-2"
            onClick={() => onDec(each.id)}
          >
            -
          </button>
          {each.quantity}
          <button
            type="button"
            className="btn btn-warning ms-2"
            onClick={() => onInc(each.id)}
          >
            +
          </button>
        </div>
        <div className="d-flex align-items-center my-2">
          <i className="fa-solid fa-indian-rupee-sign"></i>
          <b>{each.cost}</b>
        </div>
      </div>
    </li>
  );
};

export default CartItems;
