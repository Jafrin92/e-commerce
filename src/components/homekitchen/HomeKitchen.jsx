import React from "react";
import "./homekitchen.css";
import kitchenpan from "../../assets/homeki/kitchenpan.png"
import tools from "../../assets/homeki/tools.png"
import utensil from "../../assets/homeki/utensil.png"
import boxcontainer from "../../assets/homeki/boxcontainer.png"
import bucket from "../../assets/homeki/bucket.png"
import kitchenaccessories from "../../assets/homeki/kitchenaccessories.png"
import manufactures from "../../assets/homeki/manufactures.png"


const HomeKitchen = () => {
  return (
    <section id="hkitchen">
      <div className="container">
        <div className="kitchen-bg"></div>
        <div className="commonHead">
          <a href="#">
            <h5>Home Kitchen</h5>
          </a>
        </div>
        <div className="row">
            <div className="product kitchenProduct">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={kitchenpan} alt="kitchenpan" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Kitchen Pan</p>
                    </div>
                </div>
            </div>
            <div className="product kitchenProduct">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={tools} alt="tools" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Tools</p>
                    </div>
                </div>
            </div>
            <div className="product kitchenProduct">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={utensil} alt="utensil" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Utensil</p>
                    </div>
                </div>
            </div>
            <div className="product kitchenProduct">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={boxcontainer} alt="boxcontainer" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Plastic Box & Container</p>
                    </div>
                </div>
            </div>
            <div className="product kitchenProduct">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={bucket} alt="bucket" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Plastic Bucket</p>
                    </div>
                </div>
            </div>
            <div className="product kitchenProduct">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={kitchenaccessories} alt="kitchenaccessories" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Kitchen Accessories</p>
                    </div>
                </div>
            </div>
            <div className="product kitchenProduct">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={manufactures} alt="manufactures" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Plastic Manufactures</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HomeKitchen;
