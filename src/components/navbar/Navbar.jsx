import React, { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { FaHeart } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaBabyCarriage } from "react-icons/fa";
import { FaKitchenSet } from "react-icons/fa6";
import { MdOutlineSportsHandball } from "react-icons/md";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <nav className="menuwrap">
        <div className="topmenu">
          <button>
            <FaBars className="nav-bar" onClick={showSidebar} />
          </button>
          <div className="menu-container">
            <div className="menu">
              <ul className="fav-menu">
                <li className="faver">
                  <a className="common-icon" href="#">
                    <FaHeart className="common-icon-inner heart" />
                  </a>
                  <a href="#">Favourites</a>
                </li>
              </ul>
              <ul className="main-menu">
                <li>
                  <a className="common-icon" href="#">
                    <FaSun className="common-icon-inner sun" />
                  </a>
                  <a href="#">Summer Collection</a>
                </li>
                <li className="food-dropdown">
                  <a className="common-icon" href="#">
                    <IoFastFoodSharp className="common-icon-inner food" />
                  </a>
                  <a href="#">Food</a>
                  <ul>
                    <li>
                      <a href="#">Fruit & Vegetables</a>
                    </li>
                    <li>
                      <a href="#"></a>Meat & Fish
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="common-icon">
                    <FaBabyCarriage className="common-icon-inner baby" />
                  </a>
                  <a href="#">Baby Care</a>
                </li>
                <li>
                  <a className="common-icon" href="#">
                    <FaKitchenSet className="common-icon-inner kitchen" />
                  </a>
                  <a href="#">Home & Kitchen</a>
                </li>
                <li>
                  <a className="common-icon" href="#">
                    <MdOutlineSportsHandball className="common-icon-inner toy" />
                  </a>
                  <a href="#">Toys & Sports</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
