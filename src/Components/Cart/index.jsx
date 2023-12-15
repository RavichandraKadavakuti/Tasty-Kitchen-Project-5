import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartItems from "../CartItems";
import { useSelector } from "react-redux";
import PaymentSuccess from "../PaymentSuccess";
import { useEffect } from "react";
import { Link } from "react-router-dom";
const Cart = () => {
  const cartList = useSelector((store) => store.cart.items);
  const total = cartList.reduce((result, current) => {
    return result + current.cost * current.quantity;
  }, 0);

  const [placeOrder, setPlaceOrder] = useState(false);

  const onPlaceOrder = () => {
    setPlaceOrder(true);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <div className="pt-5"> 
          {!placeOrder && (
            <div className="mt-5">
              {cartList.length === 0 && (
                <div className="text-center">
                  <img
                    src="https://res.cloudinary.com/dnmaskg3n/image/upload/v1677469882/cooking_1_sqbmzf.png"
                    alt="empty cart"
                    className="img-fluid mb-5"
                  />
                  <h5>No Orders Yet!</h5>
                  <p>Your cart is empty. Add something from the menu.</p>
                  <Link to="/">
                    <button type="button" className="btn btn-warning">
                      Order Now
                    </button>
                  </Link>
                </div>
              )}

              {cartList.length > 0 && (
                <ul>
                  {cartList.map((each) => (
                    <CartItems key={each.id} each={each} />
                  ))}
                </ul>
              )}

              <hr />
              {total > 0 && (
                <div className="d-flex justify-content-between">
                  <h5>Order Total : </h5>
                  <div>
                    <h6>
                      <i className="fa-solid fa-indian-rupee-sign me-1"></i>
                      {total}
                    </h6>
                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={onPlaceOrder}
                    >
                      Place Order
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {placeOrder && <PaymentSuccess />}
          <div className="my-5">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
