import React, { useEffect } from "react";
import { useState } from "react";
import {
  FailureViewData,
  GetApiCall,
  LoadingViewData,
  initialFetchState,
} from "../../assets/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./index.css";

const HomeSlider = () => {
  const [fetchState, setFetchState] = useState(initialFetchState.INITIAL);
  const [error, setError] = useState("");
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setFetchState(initialFetchState.INPROGRESS);
        const path = "restaurants-list/offers";
        const apiResponse = await GetApiCall(path);
        const modifyData = apiResponse.offers.map((each) => ({
          id: each.id,
          imageUrl: each.image_url,
        }));
        setApiData(modifyData);
        setFetchState(initialFetchState.SUCCESS);
      } catch (error) {
        setFetchState(initialFetchState.FAILURE);
        setError(error.message);
        console.log(error);
      }
    };
    fetchApi();
  }, []);

  const SuccessView = () => {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
    };
    return (
      <div>
        <Slider {...settings}>
          {apiData.map((each) => {
            return (
              <div key={each.id}>
                <img src={each.imageUrl} alt={each.id} className="img-fluid" />
              </div>
            );
          })}
        </Slider>
      </div>
    );
  };

  const FailureView = () => {
    return FailureViewData(error);
  };

  const LoadingView = () => {
    return LoadingViewData();
  };

  const RenderHomeSlick = () => {
    switch (fetchState) {
      case initialFetchState.SUCCESS:
        return SuccessView();
      case initialFetchState.FAILURE:
        return FailureView();
      case initialFetchState.INPROGRESS:
        return LoadingView();
      default:
        return null;
    }
  };

  return (
    <div className="container">
      <div className="row">{RenderHomeSlick()}</div>
    </div>
  );
};

export default HomeSlider;
