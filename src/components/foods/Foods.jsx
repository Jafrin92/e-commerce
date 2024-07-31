import React from "react";
import "./foods.css";
import fruitveg from "../../assets/food/categories-1.jpg";
import meatf from "../../assets/food/categories-2.jpg";
import candycho from "../../assets/food/candychocolate.png";
import cooking from "../../assets/food/cooking.png";
import frozencan from "../../assets/food/frozen-canned.png";
import saucespickles from "../../assets/food/saucespickles.png";

const Foods = () => {
  return (
    <section id="foods">
      <div className="container">
        <div className="foods-bg"></div>
        <div className="commonHead">
          <h5>Food</h5>
        </div>
        <div className="row">
          <div className="product foodProduct">
            <div className="productimgInner">
              <div className="productImage">
                <img src={fruitveg} alt="fruitveg" />
              </div>
              <div className="productTittle">
                <p className="names">Fruits & Vegetables</p>
              </div>
            </div>
          </div>
          <div className="product foodProduct">
            <div className="productimgInner">
              <div className="productImage">
                <img src={meatf} alt="meatf" />
              </div>
              <div className="productTittle">
                <p className="names">Meat & Fish</p>
              </div>
            </div>
          </div>
          <div className="product foodProduct">
            <div className="productimgInner">
              <div className="productImage">
                <img src={candycho} alt="candycho" />
              </div>
              <div className="productTittle">
                <p className="names">Candy & Chocolate</p>
              </div>
            </div>
          </div>
          <div className="product foodProduct">
            <div className="productimgInner">
              <div className="productImage">
                <img src={cooking} alt="cooking" />
              </div>
              <div className="productTittle">
                <p className="names">Cooking</p>
              </div>
            </div>
          </div>
          <div className="product foodProduct">
            <div className="productimgInner">
              <div className="productImage">
                <img src={frozencan} alt="frozencan" />
              </div>
              <div className="productTittle">
                <p className="names">Frozen Can Food</p>
              </div>
            </div>
          </div>
          <div className="product foodProduct">
            <div className="productimgInner">
              <div className="productImage">
                <img src={saucespickles} alt="saucespickles" />
              </div>
              <div className="productTittle">
                <p className="names">Sauces & Pickles</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foods;
