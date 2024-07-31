import React from "react";
import "./shop.css";
import shopEarn from "../../assets/index/Shop-Earn-Points.jpg";
import dealDay from "../../assets/index/Deal-day.jpg";
import pCare from "../../assets/index/Premium-care.jpg";

const Shop = () => {
  return (
    <section id="shop">
      <div className="container">
        <div className="row">
          <h3>Shop & Get More</h3>
        </div>
        <div className="row shop-inner">
          <div className="shop-items">
            <div className="shop-contant">
              <h2>Shop & Earn Points</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi, quasi distinctio. Autem sit quam modi! Totam
                dignissimos architecto dicta odio?
              </p>
            </div>
            <div className="shop-image">
              <picture>
                <img src={shopEarn} alt="shopEarn" />
              </picture>
            </div>
          </div>
          <div className="shop-items">
            <div className="shop-contant">
              <h2>Deal of the Day</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi, quasi distinctio. Autem sit quam modi! Totam
                dignissimos architecto dicta odio?
              </p>
            </div>
            <div className="shop-image">
              <picture>
                <img src={dealDay} alt="dealDay" />
              </picture>
            </div>
          </div>
          <div className="shop-items">
            <div className="shop-contant">
              <h2>Premium Care</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Excepturi, quasi distinctio. Autem sit quam modi! Totam
                dignissimos architecto dicta odio?
              </p>
            </div>
            <div className="shop-image">
              <picture>
                <img src={pCare} alt="pCare" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
