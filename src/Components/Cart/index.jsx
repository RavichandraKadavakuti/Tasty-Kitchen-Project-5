import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import CartItems from "../CartItems";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Cart = () => {
  // const store = useSelector((state) => state.cartItems);
  // const eachCost = store.map((each) => {
  //   return each.cost;
  // });
  // const totalCost = eachCost.reduce((result, current) => result + current);
  // console.log(totalCost);
  return (
    <div className="container">
      <div className="row">
        <Navbar />
        <div className="mt-5">
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

          <hr />
          {/* <div className="d-flex justify-content-between">
            <h5>Order Total : </h5>
            <div>
              <h6>
                <i className="fa-solid fa-indian-rupee-sign me-1"></i>
                {totalCost}
              </h6>
              <button type="button" className="btn btn-warning">
                Place Order
              </button>
            </div>
          </div> */}
        </div>
        <div className="my-5">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Cart;
