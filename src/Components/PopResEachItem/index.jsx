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

const PopResEachItem = (props) => {
  const [apiData, setApiData] = useState([]);
  const [foodItems, setFoodItems] = useState([]);
  const [fetchState, setFetchState] = useState(initialFetchState.INITIAL);
  const [errorMsg, setErrorMsg] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setFetchState(initialFetchState.INPROGRESS);
        const { match } = props;
        const { params } = match;
        const { id } = params;
        const path = `restaurants-list/${id}`;
        const apiResponse = await GetApiCall(path);
        const data = apiResponse;
        const modifyData1 = {
          imageUrl: data.image_url,
          costForTwo: data.cost_for_two,
          cuisine: data.cuisine,
          id: data.id,
          location: data.location,
          name: data.name,
          rating: data.rating,
          reviewsCount: data.reviews_count,
        };

        const modifyData2 = data.food_items.map((each) => ({
          id: each.id,
          imageUrl: each.image_url,
          name: each.name,
          rating: each.rating,
          foodType: each.food_type,
          cost: each.cost,
          addCart: false,
          cartCount: 1,
        }));

        setApiData(modifyData1);
        setFoodItems(modifyData2);
        setFetchState(initialFetchState.SUCCESS);
      } catch (error) {
        setFetchState(initialFetchState.FAILURE);
        setErrorMsg(error.message);
      }
    };
    fetchApi();
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
        break;
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
        <div className="col-5">
          <img
            src={apiData.imageUrl}
            alt={apiData.id}
            className="img-fluid rounded"
          />
        </div>
        <div className="text-light ms-2 ms-lg-5">
          <h6>{apiData.name}</h6>
          <h6>{apiData.cuisine}</h6>
          <p>{apiData.location}</p>
          <div className="d-flex">
            <div className="border-end border-light pe-2">
              <span>
                <i className="fa-solid fa-star me-1"></i>
                {apiData.rating}
              </span>
              <br />
              <span>{apiData.reviewsCount}+ Ratings</span>
            </div>
            <div className="ps-2">
              <span>
                <i className="fa-solid fa-indian-rupee-sign me-1"></i>
                {apiData.costForTwo}
              </span>
              <br />
              <span>cost for two</span>
            </div>
          </div>
        </div>
      </div>
      <ul className="d-flex flex-wrap justify-content-center">
        {foodItems.map((each) => (
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
          {RenderEachPopRes()}
          <div className="my-5">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopResEachItem;
