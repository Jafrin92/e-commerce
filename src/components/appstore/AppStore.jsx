import React from "react";
import "./appstore.css";
import applestore from "../../assets/index/applestore.png"
import playstore from "../../assets/index/playstore.png"
import appstore from "../../assets/index/appstore.png"

const AppStore = () => {
  return (
    <section id="appstore">
      <div className="container">
        <div className="row">
          <div className="appcontent">
            <div className="downloadapp">
              <h2>Download The E-Commerce App Now!</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt, fugiat!
              </p>
              <div className="store">
                <a href="#">
                  <img src={applestore} alt="applestore" />
                </a>
                <a href="#">
                  <img src={playstore} alt="playstore" />
                </a>
              </div>
            </div>
          </div>
          <div className="appimage">
            <img src={appstore} alt="appstore" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppStore;
