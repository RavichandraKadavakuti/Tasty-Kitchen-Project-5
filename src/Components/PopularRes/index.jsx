import React from "react";
import { useState, useEffect } from "react";
import {
  initialFetchState,
  LoadingViewData,
  FailureViewData,
  GetApiCall,
  initialFilterValue,
} from "../../assets";
import PopResItems from "../PopResItems";

const PopularRes = () => {
  const [fetchState, setFetchState] = useState(initialFetchState.INITIAL);
  const [error, setError] = useState("");
  const [apiData, setApiData] = useState([]);
  const [filterValue, setFilterValue] = useState(initialFilterValue[0].value);
  let [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        setFetchState(initialFetchState.INPROGRESS);
        const pageLimit = 6;
        const slicePage = (currentPage - 1) * pageLimit;
        const path = `restaurants-list?offset=${slicePage}&limit=${pageLimit}&sort_by_rating=${filterValue}`;
        const apiResponse = await GetApiCall(path);
        setTotalPages(Math.ceil(apiResponse.total / pageLimit));

        const modifyData = apiResponse.restaurants.map((each) => ({
          id: each.id,
          name: each.name,
          menuType: each.menu_type,
          totalReviews: each.user_rating.total_reviews,
          rating: each.user_rating.rating,
          imageUrl: each.image_url,
        }));
        setApiData(modifyData);
        setFetchState(initialFetchState.SUCCESS);
      } catch (error) {
        setFetchState(initialFetchState.FAILURE);
        setError(error.message);
      }
    };
    fetchApi();
  }, [currentPage, filterValue]);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const selectFilter = (e) => {
    setFilterValue(e.target.value);
  };

  const SuccessView = () => (
    <div>
      <div className="border-bottom border-dark">
        <h1>Popular Restaurants</h1>
        <div className="d-lg-flex justify-content-between align-items-center">
          <div>
            <p>
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
          </div>
          <div className="mb-3">
            <select
              value={filterValue}
              onChange={selectFilter}
              className="form-select"
            >
              {initialFilterValue.map((each) => (
                <option key={each.id} value={each.value}>
                  {each.value}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <ul className="d-flex flex-wrap justify-content-center my-3 my-lg-5">
        {apiData.map((each) => (
          <PopResItems each={each} key={each.id} />
        ))}
      </ul>
      <div className="d-flex justify-content-center align-items-center">
        <button
          disabled={currentPage === 1}
          type="button"
          className="btn btn-warning me-3"
          onClick={prevPage}
        >
          <i className="fa-solid fa-circle-left"></i>
        </button>
        <span>
          {currentPage} of {totalPages}
        </span>
        <button
          disabled={currentPage === totalPages}
          type="button"
          className="btn btn-warning ms-3"
          onClick={nextPage}
        >
          <i className="fa-solid fa-circle-right"></i>
        </button>
      </div>
    </div>
  );

  const FailureView = () => {
    return FailureViewData(error);
  };

  const LoadingView = () => {
    return LoadingViewData();
  };

  const RenderPopRes = () => {
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
      <div className="row">{RenderPopRes()}</div>
    </div>
  );
};

export default PopularRes;
