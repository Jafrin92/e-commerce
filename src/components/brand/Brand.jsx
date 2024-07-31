import React from "react";
import "./brand.css";
import brand1 from "../../assets/index/brand-1.png";
import brand2 from "../../assets/index/brand-2.png";
import brand3 from "../../assets/index/brand-3.png";
import brand4 from "../../assets/index/brand-4.png";
import brand5 from "../../assets/index/brand-5.png";

const Brand = () => {
  return (
    <section id="brand">
      <div className="container">
        <div className="brand-heading">
          <h3>Brand</h3>
        </div>
        <div className="row brand-wrap">
          <picture>
            <img src={brand1} alt="brand1" />
          </picture>
          <picture>
            <img src={brand2} alt="brand2" />
          </picture>
          <picture>
            <img src={brand3} alt="brand3" />
          </picture>
          <picture>
            <img src={brand4} alt="brand4" />
          </picture>
          <picture>
            <img src={brand5} alt="brand5" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Brand;
