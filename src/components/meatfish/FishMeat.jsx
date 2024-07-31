import React from "react";
import "./fishmeat.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdElectricBolt } from "react-icons/md";
import beefbone from "../../assets/meatfish/beefbone.png";
import beefliver from "../../assets/meatfish/beefliver.png";
import beefmeat from "../../assets/meatfish/beefmeat.png";
import chicken from "../../assets/meatfish/chicken.png";
import chickenbrest from "../../assets/meatfish/chickenbrest.png";
import chickenleg from "../../assets/meatfish/chickenleg.png";
import chickenliver from "../../assets/meatfish/chickenliver.png";
import chickenwings from "../../assets/meatfish/chickenwings.png";
import deshichicken from "../../assets/meatfish/deshichicken.png";
import duck from "../../assets/meatfish/duck.png";
import mutton from "../../assets/meatfish/mutton.png";
import lamb from "../../assets/meatfish/lamb.png";
import bagdachingri from "../../assets/meatfish/bagda.png";
import hilsha from "../../assets/meatfish/hilsha.png";
import horinachingri from "../../assets/meatfish/horinamach.png";
import kaski from "../../assets/meatfish/kaskimach.png";
import katol from "../../assets/meatfish/katol.png";
import koi from "../../assets/meatfish/koi.png";
import pabdamach from "../../assets/meatfish/pabdamach.png";
import pangash from "../../assets/meatfish/pangash.png";
import redkarfu from "../../assets/meatfish/redkarfu.png";
import ruimach from "../../assets/meatfish/ruimach.png";
import shing from "../../assets/meatfish/shing.png";
import telapia from "../../assets/meatfish/telapia.png";
import tengra from "../../assets/meatfish/tengra.png";

const FishMeat = () => {
  return (
    <section id="meat">
      <div className="container">
        <div className="meat-bg"></div>
        <div className="commonHead">
          <a href="#">
            <h5>Meat & Fish</h5>
          </a>
        </div>
        <div className="row">
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={beefbone} alt="beefbone" />
              </div>
              <div className="productTittle">
                <p className="names">Beef Bone</p>
                <p className="weights">500 gm</p>
                <p className="price">৳ 400</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={beefliver} alt="beefliver" />
              </div>
              <div className="productTittle">
                <p className="names">Beef Liver</p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 900</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={beefmeat} alt="beefmeat" />
              </div>
              <div className="productTittle">
                <p className="names">Beef Boneless </p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 1,000</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={chicken} alt="chicken" />
              </div>
              <div className="productTittle">
                <p className="names">Broiler Chicken</p>
                <p className="weights">1 kg </p>
                <p className="price">৳ 310</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={chickenbrest} alt="chickenbrest" />
              </div>
              <div className="productTittle">
                <p className="names">Broiler Chicken Breast</p>
                <p className="weights">500 gm </p>
                <p className="price">৳ 380</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={chickenleg} alt="chickenleg" />
              </div>
              <div className="productTittle">
                <p className="names">Broiler Chicken Drumstick</p>
                <p className="weights">500 gm</p>
                <p className="price">৳ 270</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={chickenliver} alt="chickenliver" />
              </div>
              <div className="productTittle">
                <p className="names">Chicken Liver</p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 300</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={chickenwings} alt="chickenwings" />
              </div>
              <div className="productTittle">
                <p className="names">Chicken Wings</p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 380</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={deshichicken} alt="deshichicken" />
              </div>
              <div className="productTittle">
                <p className="names">Whole Deshi Chicken</p>
                <p className="weights">50 gm</p>
                <p className="price">৳ 600</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={duck} alt="duck" />
              </div>
              <div className="productTittle">
                <p className="names">Whole Deshi Duck</p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 1,000</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={mutton} alt="mutton" />
              </div>
              <div className="productTittle">
                <p className="names">Mutton </p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 1,150</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={lamb} alt="lamb" />
              </div>
              <div className="productTittle">
                <p className="names">Lamb</p>
                <p className="weights">500 gm</p>
                <p className="price">৳ 900</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={bagdachingri} alt="bagdachingri" />
              </div>
              <div className="productTittle">
                <p className="names">Bagda Chingri </p>
                <p className="weights">500 gm</p>
                <p className="price">৳ 450</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={hilsha} alt="hilsha" />
              </div>
              <div className="productTittle">
                <p className="names">Hilsha</p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 1,600</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={horinachingri} alt="horinachingri" />
              </div>
              <div className="productTittle">
                <p className="names">Horina Chingri</p>
                <p className="weights">250 gm</p>
                <p className="price">৳ 240</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={kaski} alt="kaski" />
              </div>
              <div className="productTittle">
                <p className="names">Kaski Fish</p>
                <p className="weights">250 gm </p>
                <p className="price">৳ 290</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={katol} alt="katol" />
              </div>
              <div className="productTittle">
                <p className="names">Katol</p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 450</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={koi} alt="koi" />
              </div>
              <div className="productTittle">
                <p className="names">Deshi Koi </p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 450</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={pabdamach} alt="pabdamach" />
              </div>
              <div className="productTittle">
                <p className="names">Pabda Fish</p>
                <p className="weights">500 gm </p>
                <p className="price">৳ 270</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={pangash} alt="pangash" />
              </div>
              <div className="productTittle">
                <p className="names">Pangash Fish </p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 300</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={redkarfu} alt="redkarfu" />
              </div>
              <div className="productTittle">
                <p className="names">Golden Karfu</p>
                <p className="weights">1 kg </p>
                <p className="price">৳ 650</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={ruimach} alt="ruimach" />
              </div>
              <div className="productTittle">
                <p className="names">Rui Fish </p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 450</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={shing} alt="shing" />
              </div>
              <div className="productTittle">
                <p className="names">Shing Fish </p>
                <p className="weights">500 gm</p>
                <p className="price">৳ 300</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={telapia} alt="telapia" />
              </div>
              <div className="productTittle">
                <p className="names">Telapia</p>
                <p className="weights">1 kg</p>
                <p className="price">৳ 350</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
          <div className="product">
            <div className="productimgInner">
              <div className="productImage">
                <img src={tengra} alt="tengra" />
              </div>
              <div className="productTittle">
                <p className="names">Tengra Fish</p>
                <p className="weights">500 gm</p>
                <p className="price">৳ 400</p>
              </div>
              <div className="overlay">
                <p className="addtobag">Add to Shopping Bag</p>
                <a href="#" className="btnDetails">
                  Details
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
            <div className="addbtn">
              <span>
                <MdElectricBolt /> Add to bag
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FishMeat;
