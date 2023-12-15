import React, { useEffect, useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import {
  FailureViewData,
  GetApiCall,
  LoadingViewData,
  initialFetchState,
} from "../../assets";
import PopResFoodItems from "../PopResFoodItems";
import { getFoodItemsFromApi } from "../ReduxStore/foodItemsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./index.css";

const PopResEachItem = () => {
  const [errorMsg, setErrorMsg] = useState();
  const dispatch = useDispatch();
  const data = useSelector((store) => store.foodItems);
  const { apiapiResponse, fetchState } = data;
  const { id } = useParams();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const path = `restaurants-list/${id}`;
        dispatch(getFoodItemsFromApi(path));
      } catch (error) {
        setErrorMsg(error.message);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const RenderEachPopRes = () => {
    switch (fetchState) {
      case initialFetchState.SUCCESS:
        return successView();
      case initialFetchState.FAILURE:
        return failureView();
      case initialFetchState.INPROGRESS:
        return loadingView();
      default:
        return null;
    }
  };

  const addToCartBtnToggle = (data) => {
    const modifyData = foodItems.map((each) => {
      if (each.id === data.id) {
        return { ...each, addCart: true };
      }
      return each;
    });
    setFoodItems(modifyData);
  };

  const successView = () => (
    <div className="my-3 my-lg-5">
      <div className="d-flex align-items-lg-center bg-dark rounded p-3">
        <div>
          <img
            src={apiapiResponse.imageUrl}
            alt={apiapiResponse.id}
            className="res-food-banner rounded"
          />
        </div>
        <div className="text-light ms-2 ms-lg-5">
          <h6>{apiapiResponse.name}</h6>
          <h6>{apiapiResponse.cuisine}</h6>
          <p>{apiapiResponse.location}</p>
          <div className="d-flex">
            <div className="border-end border-light pe-2">
              <span>
                <i className="fa-solid fa-star me-1"></i>
                {apiapiResponse.rating}
              </span>
              <br />
              <span>{apiapiResponse.reviewsCount}+ Ratings</span>
            </div>
            <div className="ps-2">
              <span>
                <i className="fa-solid fa-indian-rupee-sign me-1"></i>
                {apiapiResponse.costForTwo}
              </span>
              <br />
              <span>cost for two</span>
            </div>
          </div>
        </div>
      </div>
      <ul className="d-flex flex-wrap justify-content-center">
        {apiapiResponse.foodItems.map((each) => (
          <PopResFoodItems
            key={each.id}
            each={each}
            addToCartBtnToggle={addToCartBtnToggle}
          />
        ))}
      </ul>
    </div>
  );

  const loadingView = () => {
    return LoadingViewData();
  };

  const failureView = () => {
    return FailureViewData(errorMsg);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="container-height">
          <Navbar />
          <div className="pt-5">{RenderEachPopRes()}</div>
          <div className="my-5">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopResEachItem;
