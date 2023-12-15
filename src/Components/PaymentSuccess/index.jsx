import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { useDispatch } from "react-redux";
import { remove } from "../ReduxStore/cartItemsSlice";
import { useEffect } from "react";

const PaymentSuccess = () => {
  const dispatch = useDispatch();

  const onEmptyCart = () => {
    dispatch(remove([]));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="d-flex flex-column align-items-center justify-content-center text-center my-5">
          <i className="fa-regular fa-circle-check mb-5" />
          <h1>Payment Successful</h1>
          <p>Thank you for orderingYour payment is successfully completed.</p>
          <Link to="/">
            <button
              type="button"
              className="btn btn-warning"
              onClick={onEmptyCart}
            >
              Go To Home Page
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
