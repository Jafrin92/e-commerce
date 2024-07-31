import React from "react";
import "./babys.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdElectricBolt } from "react-icons/md";
import huggies from "../../assets/babycare/huggies.png"
import pampers from "../../assets/babycare/pampers.png"
import staysure from "../../assets/babycare/staysure.png"
import wipes from "../../assets/babycare/wipes.png"
import feeder from "../../assets/babycare/feeder.png"
import merilbrush from "../../assets/babycare/merilbrush.png"
import kodomo from "../../assets/babycare/kodomo.png"
import johnson from "../../assets/babycare/johnson.png"
import merilskin from "../../assets/babycare/merilskincare.png"
import lactogen from "../../assets/babycare/lactogen1.png"
import nan from "../../assets/babycare/nan1.png"
import nido from "../../assets/babycare/nido.png"
import nidal from "../../assets/babycare/nidal.png"
import pediasure from "../../assets/babycare/pediasure400.png"
import nescerelac from "../../assets/babycare/nescerelac.png"
import nescerelac2 from "../../assets/babycare/nescerelac2.png"
import nescerelac3 from "../../assets/babycare/nescerelac3.png"
import horlicks from "../../assets/babycare/horlicks.png"
import junorhorlicks from "../../assets/babycare/junorhorlicks.png"
import chocolatehorlicks from "../../assets/babycare/chocolatehorlicks.png"

const Babys = () => {
  return (
    <section id="babys">
      <div className="container">
        <div className="baby-bg"></div>
        <div className="commonHead">
          <a href="#">
            <h5>Baby Care</h5>
          </a>
        </div>
        <div className="row">
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={huggies} alt="huggies" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Huggies Diapers (9-14 kg)</p>
                        <p className="weights">58 pcs</p>
                        <p className="price">৳ 2,200</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={pampers} alt="pampers" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Pampers Diapers 2 size</p>
                        <p className="weights">94 pcs</p>
                        <p className="price">৳ 2,647</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={staysure} alt="staysure" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Stay Sure Baby Diapers</p>
                        <p className="weights">5 pcs</p>
                        <p className="price">৳ 1,122.88</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={wipes} alt="wipes" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Baby Wipes</p>
                        <p className="weights">20 pcs</p>
                        <p className="price">৳ 220</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={feeder} alt="feeder" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Feeder Baby Gift Full Set </p>
                        <p className="weights">5 pcs</p>
                        <p className="price">৳ 1000</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={merilbrush} alt="merilbrush" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Meril Baby Brushing Training Kit</p>
                        <p className="weights">45 gm</p>
                        <p className="price">৳ 200</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={kodomo} alt="kodomo" />
                    </div>
                    <div className="productTittle">
                        <p className="names">kodomo Baby Gift Set</p>
                        <p className="weights">8 items</p>
                        <p className="price">৳ 3,000</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={johnson} alt="johnson" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Johnson Baby Skin Care Gift Set</p>
                        <p className="weights">11 items</p>
                        <p className="price">৳ 3,500</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={merilskin} alt="merilskin" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Meril Baby Daily Care Essential</p>
                        <p className="weights">200 ml</p>
                        <p className="price">৳ 800</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={lactogen} alt="lactogen" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Nestlé Lactogen 1 Formula Milk Powder (0-6 M)</p>
                        <p className="weights">400 gm</p>
                        <p className="price">৳ 820</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={nan} alt="nan" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Nestle Pre Nan Premature & Low Birth Weight (0-6 M)</p>
                        <p className="weights">400 gm</p>
                        <p className="price">৳ 1,500</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={nido} alt="nido" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Nestlé Nido 1+ Growing Up Milk Powder (1-3 Y)</p>
                        <p className="weights">400 gm</p>
                        <p className="price">৳ 450</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={nidal} alt="nidal" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Nestlé Nidal 1+ Growing Up Milk Powder (1-3 Y)</p>
                        <p className="weights">400 gm</p>
                        <p className="price">৳ 600</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={pediasure} alt="pediasure" />
                    </div>
                    <div className="productTittle">
                        <p className="names">PediaSure Vanilla Delight</p>
                        <p className="weights">400 gm</p>
                        <p className="price">৳ 1,220</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={nescerelac} alt="nescerelac" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Nestle Cerelac Five Vegetable & Chicken</p>
                        <p className="weights">350 gm</p>
                        <p className="price">৳ 550</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={nescerelac2} alt="nescerelac2" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Nestle Cerelac Honey & Wheat (12 M+)</p>
                        <p className="weights">400 gm</p>
                        <p className="price">৳ 1,200</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={nescerelac3} alt="nescerelac3" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Nestle Milk Cerelac Tins Baby Rice (8 M+)</p>
                        <p className="weights">400 gm</p>
                        <p className="price">৳ 980</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={horlicks} alt="horlicks" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Standard Horlicks Health And Nutrition Drink Jar</p>
                        <p className="weights">250 gm</p>
                        <p className="price">৳ 225</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={junorhorlicks} alt="junorhorlicks" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Junior Horlicks Vanilla Health & Nutrition Drink</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 550</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={chocolatehorlicks} alt="chocolatehorlicks" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Horlicks Chocolate Flavour Jar</p>
                        <p className="weights">400 gm</p>
                        <p className="price">৳ 415</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details <IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Babys;
