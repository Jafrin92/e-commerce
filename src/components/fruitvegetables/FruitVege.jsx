import React from "react";
import "./fruitvege.css";
import { IoIosArrowBack } from "react-icons/io";
import { MdElectricBolt } from "react-icons/md";
import potatos from "../../assets/fruitsvegetables/potato.png"
import onion from "../../assets/fruitsvegetables/onion.png"
import roshun from "../../assets/fruitsvegetables/roshun.png"
import ginger from "../../assets/fruitsvegetables/ginger.png"
import capsicum from "../../assets/fruitsvegetables/capsicum.png"
import chichinga from "../../assets/fruitsvegetables/chichinga.png"
import coriander from "../../assets/fruitsvegetables/coriander.png"
import cucumber from "../../assets/fruitsvegetables/cucumber.png"
import dhundul from "../../assets/fruitsvegetables/dhundul.png"
import gajor from "../../assets/fruitsvegetables/gajor.png"
import greenbegun from "../../assets/fruitsvegetables/greenbegun.png"
import greenchilli from "../../assets/fruitsvegetables/greenchilli.png"
import kacakola from "../../assets/fruitsvegetables/kacakola.png"
import kalobegun from "../../assets/fruitsvegetables/kalobegun.png"
import kocurmukhi from "../../assets/fruitsvegetables/kocurmukhi.png"
import korola from "../../assets/fruitsvegetables/korola.png"
import ladiesfinger from "../../assets/fruitsvegetables/ladiesfinger.png"
import lau from "../../assets/fruitsvegetables/lau.png"
import lemon from "../../assets/fruitsvegetables/lemon.png"
import mishtikumra from "../../assets/fruitsvegetables/mishtikumra.png"
import potol from "../../assets/fruitsvegetables/potol.png"
import kacaholud from "../../assets/fruitsvegetables/kacaholud.png"
import greenmango from "../../assets/fruitsvegetables/greenmango.png"
import amrapali from "../../assets/fruitsvegetables/amrapali.png"
import fazli from "../../assets/fruitsvegetables/fazli.png"
import anar from "../../assets/fruitsvegetables/anar.png"
import anaros from "../../assets/fruitsvegetables/anaros.png"
import apple from "../../assets/fruitsvegetables/apple.png"
import banana from "../../assets/fruitsvegetables/banana.png"
import coconut from "../../assets/fruitsvegetables/coconut.png"
import dragon from "../../assets/fruitsvegetables/dragon.png"
import gaab from "../../assets/fruitsvegetables/gaab.png"
import greenapple from "../../assets/fruitsvegetables/greenapple.png"
import guava from "../../assets/fruitsvegetables/guava.png"
import jackfruit from "../../assets/fruitsvegetables/jackfruit.png"
import lotkon from "../../assets/fruitsvegetables/lotkon.png"
import malta from "../../assets/fruitsvegetables/malta.png"


const FruitVege = () => {
  return (
    <section id="vege">
      <div className="contsiner">
        <div className="vege-bg"></div>
        <div className="commonHead">
          <a href="#">
            <h5>Fruit & Vegetables</h5>
          </a>
        </div>
        <div className="row">
            <div className="product">
                <div className="productimgInner">
                    <div className="productImage">
                        <img src={potatos} alt="potato" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Potato</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 60</p>
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
                        <img src={onion} alt="onion" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Deshi Peyaj</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 120</p>
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
                        <img src={roshun} alt="roshun" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Roshun</p>
                        <p className="weights">500 gm </p>
                        <p className="price">৳ 120</p>
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
                        <img src={ginger} alt="ginger" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Deshi Ginger</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 150</p>
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
                        <img src={capsicum} alt="capsicum" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Green, Red & Yellow Capsicum</p>
                        <p className="weights">each</p>
                        <p className="price">৳ 90</p>
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
                        <img src={chichinga} alt="chichinga" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Chichinga</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 70</p>
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
                        <img src={coriander} alt="coriander" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Coriander Leaves</p>
                        <p className="weights">100 gm</p>
                        <p className="price">৳ 30</p>
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
                        <img src={cucumber} alt="cucumber" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Cucumber</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 40</p>
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
                        <img src={dhundul} alt="dhundul" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Dhundul</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 40</p>
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
                        <img src={gajor} alt="gajor" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Deshi Gajor</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 120</p>
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
                        <img src={greenbegun} alt="greenbegun" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Green Brinjals</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 50</p>
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
                        <img src={greenchilli} alt="greenchilli" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Green Chilli</p>
                        <p className="weights">250 gm</p>
                        <p className="price">৳ 65</p>
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
                        <img src={kacakola} alt="kacakola" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Kach Kola</p>
                        <p className="weights">4 pcs</p>
                        <p className="price">৳ 30</p>
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
                        <img src={kalobegun} alt="kalobegun" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Kalo Gol Begun</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 60</p>
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
                        <img src={kocurmukhi} alt="kocurmukhi" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Kocur Mukhi</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 45</p>
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
                        <img src={korola} alt="korola" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Korola </p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 55</p>
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
                        <img src={ladiesfinger} alt="ladiesfinger" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Dheros (Ladies Finger)</p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 35</p>
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
                        <img src={lau} alt="lau" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Lau</p>
                        <p className="weights">each </p>
                        <p className="price">৳ 80</p>
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
                        <img src={lemon} alt="lemon" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Lebu (Lemon)</p>
                        <p className="weights">4 pcs</p>
                        <p className="price">৳ 35</p>
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
                        <img src={mishtikumra} alt="mishtikumra" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Mishti Kumra</p>
                        <p className="weights">each</p>
                        <p className="price">৳ 150</p>
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
                        <img src={potol} alt="potol" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Potol </p>
                        <p className="weights">500 gm</p>
                        <p className="price">৳ 35</p>
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
                        <img src={kacaholud} alt="kacaholud" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Kacha Holud </p>
                        <p className="weights">250 gm</p>
                        <p className="price">৳ 55</p>
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
                        <img src={greenmango} alt="greenmango" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Kacha Am (Green Mango)</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 80</p>
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
                        <img src={amrapali} alt="amrapali" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Amrupali Mango </p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 160</p>
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
                        <img src={fazli} alt="fazli" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Fazli Am</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 140</p>
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
                        <img src={anar} alt="anar" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Dalim (Pomegranate)</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 500</p>
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
                        <img src={anaros} alt="anaros" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Anaros (Pineapple)</p>
                        <p className="weights">each</p>
                        <p className="price">৳ 90</p>
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
                        <img src={apple} alt="apple" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Apple</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 300</p>
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
                        <img src={banana} alt="banana" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Sagor Kola (Banana)</p>
                        <p className="weights">4 pcs</p>
                        <p className="price">৳ 60</p>
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
                        <img src={coconut} alt="coconut" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Green Coconut</p>
                        <p className="weights">each </p>
                        <p className="price">৳ 130</p>
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
                        <img src={dragon} alt="dragon" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Dragon</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 350</p>
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
                        <img src={gaab} alt="gaab" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Gaab</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 300</p>
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
                        <img src={greenapple} alt="greenapple" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Green Apple </p>
                        <p className="weights">1 kg</p>
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
                        <img src={guava} alt="guava" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Peyara (Guava)</p>
                        <p className="weights">1 kg</p>
                        <p className="price">৳ 120</p>
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
                        <img src={jackfruit} alt="jackfruit" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Jackfruit </p>
                        <p className="weights">each </p>
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
                        <img src={lotkon} alt="lotkon" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Lotkon</p>
                        <p className="weights">500 gm </p>
                        <p className="price">৳ 100</p>
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
                        <img src={malta} alt="malta" />
                    </div>
                    <div className="productTittle">
                        <p className="names">Malta</p>
                        <p className="weights">1 kg </p>
                        <p className="price">৳ 290</p>
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

export default FruitVege;
