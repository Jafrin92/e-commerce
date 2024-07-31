import React from "react";
import "./banner.css";
import { FaSearch } from "react-icons/fa";
import banner from "../../assets/index/banner.png";

const Banner = () => {
  return (
    <section id="banner">
      <div className="container">
      <div className="row">
        <div className="banner-contant">
          <h1>Grocery Delivered at your Doorstep</h1>
          <div className="input">
            <input
              type="text"
              placeholder="Search for products (e.g. eggs, milk, potato)"
            />
            <button className="banner-search">
              <FaSearch className="sreach" />
            </button>
          </div>
        </div>
        <div className="banner-img">
          <picture>
            <img src={banner} alt="banner" />
          </picture>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Banner;
