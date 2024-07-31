import React from "react";
import Homelan from "../components/language/Homelan";
import Topheader from "../components/top-header/Topheader";
import Navbar from "../components/navbar/Navbar";
import Login from "../components/login/Login";

const FavLogin = () => {
  return (
    <>
      <Homelan></Homelan>
      <Topheader></Topheader>
      <Navbar></Navbar>
      <Login></Login>
    </>
  );
};

export default FavLogin;
