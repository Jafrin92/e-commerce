import React from "react";
import "./shopnow.css";
import { BsBasketFill } from "react-icons/bs";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoIosShareAlt } from "react-icons/io";
import { IoLogoYoutube } from "react-icons/io";

const ShopNow = () => {
  return (
    <section id="shop-now">
      <div className="container">
        <div className="row now-wrap">
          <div className="shopnow-left">
            <div className="description-box">
              <div className="description-text">
                <h2>Shop your daily necessities</h2>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus, praesentium debitis. Vel praesentium a id libero.
                </p>
                <div className="btn">
                  <a href="#" className="commonbtn">
                    Start Shopping
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="shopnow-right">
            <div className="shop-order">
              <a href="#" className="nowicon1">
                <BsBasketFill className="nicon" />
              </a>
              <span>How to Place Order online</span>
              <div className="order-watch">
                <a href="#">
                  <MdOutlineWatchLater className="nowicon2" />
                </a>
                Watch later
              </div>
              <div className="order-share">
                <a href="#">
                  <IoIosShareAlt className="nowicon2" />
                </a>
                Share
              </div>
            </div>
            <div className="shop-play">
              <a
                href="https://youtu.be/knxlpZk3NW0?si=11F3zVASOfRsQ18q"
                target="_blank"
              >
                <IoLogoYoutube className="play" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopNow;
