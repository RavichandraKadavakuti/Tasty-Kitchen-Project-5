import React from "react";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const homePage = () => {
    navigate("/");
  };
  return (
    <div className="container">
      <div className="row">
        <div className="text-center">
          <h1>Page Not Found</h1>
          <button type="button" className="btn btn-primary" onClick={homePage}>
            Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
