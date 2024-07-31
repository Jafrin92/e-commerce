import React from "react";
import Homelan from "../components/language/Homelan";
import Topheader from "../components/top-header/Topheader";
import Navbar from "../components/navbar/Navbar";
import HomeKitchen from "../components/homekitchen/HomeKitchen";

const KitchenHome = () => {
  return (
    <>
      <Homelan></Homelan>
      <Topheader></Topheader>
      <Navbar></Navbar>
      <HomeKitchen></HomeKitchen>
    </>
  );
};

export default KitchenHome;
