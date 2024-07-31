import React from "react";
import "./footer.css";
import { SlSocialFacebook } from "react-icons/sl";
import { CiTwitter } from "react-icons/ci";
import { SlSocialInstagram } from "react-icons/sl";
import { AiOutlineGlobal } from "react-icons/ai";

const BottomFooter = () => {
  return (
    <section id="footer-social">
      <div className="container">
        <div className="row">
          <div className="copyright-text">
            <p>© 2024 E-Commerce Limited</p>
          </div>
          <div className="social-mediaicon">
            <div className="media-icon">
              <div className="media-iconinner">
                <a href="#" className="fbicon">
                  <SlSocialFacebook />
                </a>
              </div>
              <div className="media-iconinner">
                <a href="#" className="fbicon">
                  <CiTwitter />
                </a>
              </div>
              <div className="media-iconinner">
                <a href="#" className="fbicon">
                  <SlSocialInstagram />
                </a>
              </div>
            </div>
            <div className="footer-engbtn">
              <a href="#" className="global">
                <AiOutlineGlobal />
              </a>
              <span>English (EN)</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomFooter;
