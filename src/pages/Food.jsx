import React from "react";
import Homelan from "../components/language/Homelan";
import Topheader from "../components/top-header/Topheader";
import Navbar from "../components/navbar/Navbar";
import Foods from "../components/foods/Foods";

const Food = () => {
  return (
    <>
      <Homelan></Homelan>
      <Topheader></Topheader>
      <Navbar></Navbar>
      <Foods></Foods>
    </>
  );
};

export default Food;
