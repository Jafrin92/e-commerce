import React from "react";
import Homelan from "../components/language/Homelan";
import Topheader from "../components/top-header/Topheader";
import Navbar from "../components/navbar/Navbar";
import FishMeat from "../components/meatfish/FishMeat";

const MeatFish = () => {
  return (
    <>
      <Homelan></Homelan>
      <Topheader></Topheader>
      <Navbar></Navbar>
      <FishMeat></FishMeat>
    </>
  );
};

export default MeatFish;
