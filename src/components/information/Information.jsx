import React from "react";
import "./information.css";
import { FaHouse } from "react-icons/fa6";
import { GiPaperBagOpen } from "react-icons/gi";
import { MdFamilyRestroom } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";

const Information = () => {
  return (
    <section id="information">
      <div className="container">
        <div className="row infowrap">
          <div className="infobox">
            <div className="infohead">
              <h2>26 warehouses</h2>
              <div className="house">
                <FaHouse className="infoicon" />
              </div>
            </div>
            <p>all over bangladesh</p>
          </div>
          <div className="infobox">
            <div className="infohead">
              <h2>5 million orders</h2>
              <div className="house">
                <GiPaperBagOpen className="infoicon" />
              </div>
            </div>
            <p>have been delivered</p>
          </div>
          <div className="infobox">
            <div className="infohead">
              <h2>1,000+ families</h2>
              <div className="house">
                <MdFamilyRestroom className="infoicon" />
              </div>
            </div>
            <p>are being served</p>
          </div>
          <div className="infobox">
            <div className="infohead">
              <h2>340 million Taka</h2>
              <div className="house">
                <FaHandHoldingUsd className="infoicon" />
              </div>
            </div>
            <p>customer savings</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;
