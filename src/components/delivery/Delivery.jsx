import React from "react";
import "./delivery.css";
import shop from "../../assets/index/shop.png";
import payment from "../../assets/index/payment.png";
import delivery from "../../assets/index/delivery.png";
import savemoney from "../../assets/index/save-money.png";

const Delivery = () => {
  return (
    <section id="delivery">
      <div className="container">
        <div className="row">
          <div className="delivery-box">
            <div className="delivery-icon">
              <picture>
                <img src={shop} alt="shop" />
              </picture>
            </div>
            <div className="delivery-content">
              <span>
                <b>+15000 products</b> to shop from
              </span>
            </div>
          </div>
          <div className="delivery-box">
            <div className="delivery-icon">
              <picture>
                <img src={payment} alt="payment" />
              </picture>
            </div>
            <div className="delivery-content">
              <span>
                Pay <b>after</b> receiving products
              </span>
            </div>
          </div>
          <div className="delivery-box">
            <div className="delivery-icon">
              <picture>
                <img src={delivery} alt="delivery" />
              </picture>
            </div>
            <div className="delivery-content">
              <span>
                Get your delivery within <b>1 hour</b>
              </span>
            </div>
          </div>
          <div className="delivery-box">
            <div className="delivery-icon">
              <picture>
                <img src={savemoney} alt="savemoney" />
              </picture>
            </div>
            <div className="delivery-content">
              <span>
                Get offers that <b>Save Money</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
