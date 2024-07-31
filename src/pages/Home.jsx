import React from "react";
import Homelan from "../components/language/Homelan";
import Topheader from "../components/top-header/Topheader";
import Navbar from "../components/navbar/Navbar";
import Banner from "../components/heropart/Banner";
import Delivery from "../components/delivery/Delivery";
import Categories from "../components/categories/Categories";
import Brand from "../components/brand/Brand";
import Shop from "../components/shop/Shop";
import ShopNow from "../components/shopNow/ShopNow";
import AppStore from "../components/appstore/AppStore";
import Information from "../components/information/Information";
import Footer from "../components/footer/Footer";
import BottomFooter from "../components/footer/BottomFooter";

const Home = () => {
  return (
    <>
      <Homelan></Homelan>
      <Topheader></Topheader>
      <Navbar></Navbar>
      <Banner></Banner>
      <Delivery></Delivery>
      <Categories></Categories>
      <Brand></Brand>
      <Shop></Shop>
      <ShopNow></ShopNow>
      <AppStore></AppStore>
      <Information></Information>
      <Footer></Footer>
      <BottomFooter></BottomFooter>
    </>
  );
};

export default Home;
