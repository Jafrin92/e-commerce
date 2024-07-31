import React from "react";
import "./scollection.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdElectricBolt } from "react-icons/md";
import potato from "../../assets/summer/potato.png"
import tomato from "../../assets/summer/tomato.png"
import greenchilli from "../../assets/summer/greenchilli.png"
import lemon from "../../assets/summer/lemon.png"
import coriander from "../../assets/summer/coriander.png"
import cucumber from "../../assets/summer/cucumber.png"
import onion from "../../assets/summer/onion.png"
import banana from "../../assets/summer/banana.png"
import guava from "../../assets/summer/guava.png"
import malta from "../../assets/summer/malta.png"
import bagda from "../../assets/summer/bagda.png"
import horina from "../../assets/summer/horinamach.png"
import kaski from "../../assets/summer/kaskimach.png"
import pabda from "../../assets/summer/pabdamach.png"
import ruimach from "../../assets/summer/ruimach.png"
import moshurdal from "../../assets/summer/moshurdal.png"
import moongdal from "../../assets/summer/moongdal.png"
import khesaridal from "../../assets/summer/khesaridal.png"
import helendal from "../../assets/summer/helendal.png"
import chanadal from "../../assets/summer/chanadal.png"
import freshsugar from "../../assets/summer/freshsugar.png"
import teersugar from "../../assets/summer/teersugar.png"
import tissue from "../../assets/summer/tissue.png"
import toilettissue from "../../assets/summer/toilettissue.png"
import glucomax from "../../assets/summer/glucomax.png"
import orsaline from "../../assets/summer/orsaline.png"
import tang50g from "../../assets/summer/tang50g.png"
import tang250g from "../../assets/summer/tang250g.png"
import tang500g from "../../assets/summer/tang500g.png"
import sevenup1 from "../../assets/summer/7up250ml.png"
import sevenup2 from "../../assets/summer/7up1l.png"
import sevenup3 from "../../assets/summer/7up2l.png"
import dew from "../../assets/summer/dew.png"
import spritenosugar from "../../assets/summer/spritenosugar.png"
import sprite250ml from "../../assets/summer/sprite250ml.png"
import sprite2l from "../../assets/summer/sprite2l.png"
import mum2l from "../../assets/summer/mum2l.png"
import mum5l from "../../assets/summer/mum5l.png"
import fresh2l from "../../assets/summer/fresh2l.png"
import fresh5l from "../../assets/summer/fresh5l.png"

const SCollection = () => {
  return (
    <section id="summerc">
      <div className="container">
        <div className="bg-banner"></div>
        <div className="commonHead">
            <a href="#">
                <h5>Summer Collection</h5>
            </a>
        </div>
        <div className="row">
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={potato} alt="potato" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Potato</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 70</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={tomato} alt="tomato" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Tomato</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 150</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={greenchilli} alt="greenchilli" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Green Chilli</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 160</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={lemon} alt="lemon" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Lemon</p>
                        <p className="weights">4 pcs</p>
                        <p className="price">৳ 35</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={coriander} alt="coriander" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Coriander Leaves</p>
                        <p className="weights">100 gm</p>
                        <p className="price">৳ 30</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={cucumber} alt="cucumber" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Cucumber</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 40</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={onion} alt="onion" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Onion</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 130</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={banana} alt="banana" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Banana Sagor</p>
                        <p className="weights">4 pcs</p>
                        <p className="price">৳ 60</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={guava} alt="guava" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Guava</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 100</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={malta} alt="malta" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Malta</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 180</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={bagda} alt="bagda" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Bagda Chingri</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 460</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={horina } alt="horina " />
                    </div>
                    <div className="productTittle">
                        <p className="names">Horina Chingri</p>
                        <p className="weights">250 gm</p>
                        <p className="price">৳ 239</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={kaski } alt="kaski " />
                    </div>
                    <div className="productTittle">
                        <p className="names">Kaski Fish</p>
                        <p className="weights">250 gm</p>
                        <p className="price">৳ 200</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={pabda} alt="pabda" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Pabda Fish</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 270</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={ruimach} alt="ruimach" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Rui Fish</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 175</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={moshurdal} alt="moshurdal" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Moshur Dal</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 120</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={moongdal} alt="moongdal" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Moong Dal</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 200</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={khesaridal} alt="khesaridal" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Khesari Dal</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 130</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={helendal} alt="helendal" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Helen Dal</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 200</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={chanadal} alt="chanadal" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Chana Dal</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 160</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={freshsugar} alt="freshsugar" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Fresh Sugar</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 132</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={teersugar} alt="teersugar" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Teer Sugar</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 135</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={tissue} alt="tissue" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Tissue Box</p>
                        <p className="weights">each</p>
                        <p className="price">৳ 100</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={toilettissue} alt="toilettissue" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Toilet Tissue</p>
                        <p className="weights">each</p>
                        <p className="price">৳ 25</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={glucomax} alt="glucomax" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Glucomax D</p>
                        <p className="weights">200 gm</p>
                        <p className="price">৳ 100</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={orsaline} alt="orsaline" />
                    </div>
                    <div className="productTittle">
                        <p className="names">SMC Orsaline-N</p>
                        <p className="weights">25 pcs</p>
                        <p className="price">৳ 150</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={tang50g} alt="tang50g" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Tang Orange 50g</p>
                        <p className="weights">50 gm</p>
                        <p className="price">৳ 10</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={tang250g} alt="tang250g" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Tang</p>
                        <p className="weights">250 gm</p>
                        <p className="price">৳ 260</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={tang500g} alt="tang500g" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Tang</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 500</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={sevenup1} alt="sevenup1" />
                    </div>
                    <div className="productTittle">
                        <p className="names">7up</p>
                        <p className="weights">250 ml</p>
                        <p className="price">৳ 25</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={sevenup2} alt="sevenup2" />
                    </div>
                    <div className="productTittle">
                        <p className="names">7up</p>
                        <p className="weights">1 ltr</p>
                        <p className="price">৳ 70</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={sevenup3} alt="sevenup3" />
                    </div>
                    <div className="productTittle">
                        <p className="names">7up</p>
                        <p className="weights">2 ltr</p>
                        <p className="price">৳ 140</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={dew} alt="dew" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Mountain Dew</p>
                        <p className="weights">500 ml</p>
                        <p className="price">৳ 45</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={spritenosugar} alt="spritenosugar" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Sprit Suger Free</p>
                        <p className="weights">250 ml</p>
                        <p className="price">৳ 25</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={sprite250ml} alt="sprite250ml" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Sprite</p>
                        <p className="weights">250 ml</p>
                        <p className="price">৳ 25</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={sprite2l} alt="sprite2l" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Sprite</p>
                        <p className="weights">2 ltr</p>
                        <p className="price">৳ 140</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={mum2l} alt="mum2l" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Mum Minaral Water</p>
                        <p className="weights">2 ltr</p>
                        <p className="price">৳ 40</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={mum5l} alt="mum5l" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Mum Minaral Water</p>
                        <p className="weights">5 ltr</p>
                        <p className="price">৳ 90</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={fresh2l} alt="fresh2l" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Fresh Minaral Water</p>
                        <p className="weights">2 ltr</p>
                        <p className="price">৳ 40</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
                    </div>
                </div>
                <div className="addbtn">
                    <span><MdElectricBolt /> Add to bag</span>
                </div>
            </div>
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={fresh5l} alt="fresh5l" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Fresh Minaral Water</p>
                        <p className="weights">5 ltr</p>
                        <p className="price">৳ 90</p>
                    </div>
                    <div className="overlay">
                        <p className="addtobag">Add to Shopping Bag</p>
                        <a href="#" className="btnDetails">Details<IoIosArrowBack /></a>
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

export default SCollection;
