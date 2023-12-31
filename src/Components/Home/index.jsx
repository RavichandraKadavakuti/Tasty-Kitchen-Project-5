import React from "react";
import Navbar from "../Navbar";
import HomeSlider from "../HomeSlider";
import PopularRes from "../PopularRes";
import Footer from "../Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="container-height p-0">
          <Navbar />
          <div className="my-5 pt-5">
            <HomeSlider />
          </div>
          <div>
            <PopularRes />
          </div>
          <div className="my-3 my-lg-5">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
