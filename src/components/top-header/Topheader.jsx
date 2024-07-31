import React from "react";
import "./topheader.css";
// import { FaBars } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { useTranslation } from "react-i18next";
import logo from "../../assets/index/logo.png";

const Topheader = () => {
  const [t, i18n] = useTranslation("global");
  // const handleChangeLanguage = (lang:string)=>{

  // }
  return (
    <>
      <header className="top-header">
        <div className="container">
          <div className="row">
            <div className="header-left">
              {/* <button>
                <FaBars className="header-bar" />
              </button> */}
              <picture>
                <a href="#">
                  <img src={logo} alt="logo" />
                </a>
              </picture>
            </div>
            <div className="header-right">
              <div className="location">
                <a href="#">
                  <FaLocationDot />
                </a>
                <span>Dhaka</span>
                <a href="#">
                  <MdOutlineArrowDropDown className="location-icon" />
                </a>
              </div>
              <div className="language">
                <button className="eng">en</button>
                <button className="bangla">বাং</button>
              </div>
              <div className="login">
                <button className="commonbtn">Login</button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Topheader;
