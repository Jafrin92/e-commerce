import React from "react";
import Homelan from "../components/language/Homelan";
import Topheader from "../components/top-header/Topheader";
import Navbar from "../components/navbar/Navbar";
import FruitVege from "../components/fruitvegetables/FruitVege";

const FruitVegetable = () => {
  return (
    <>
      <Homelan></Homelan>
      <Topheader></Topheader>
      <Navbar></Navbar>
      <FruitVege></FruitVege>
    </>
  );
};

export default FruitVegetable;
