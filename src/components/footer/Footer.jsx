import React from "react";
import "./footer.css";
import bkash from "../../assets/index/bkash.png";
import mastercard from "../../assets/index/mastercard.png";
import visa from "../../assets/index/visa.png";
import googlePlay from "../../assets/index/playstore.png";
import applePlay from "../../assets/index/applestore.png";

const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="row">
          <div className="footer-left">
            <div className="footer-menu">
              <div className="footer-servise">
                <h4>About E-Commerce</h4>
                <ul>
                  <li>
                    <a href="#">Our Story</a>
                  </li>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms of Use</a>
                  </li>
                </ul>
              </div>
              <div className="footer-servise">
                <h4>Customer Service</h4>
                <ul>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                </ul>
              </div>
              <div className="footer-servise">
                <h4>For Business</h4>
                <ul>
                  <li>
                    <a href="#">Corporate</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="payment-area">
              <ul>
                <li className="footertext">Payment Methods</li>
                <li className="fotericon">
                  <img src={mastercard} alt="mastercard" />
                </li>
                <li className="fotericon">
                  <img src={visa} alt="visa" />
                </li>
                <li className="fotericon">
                  <img src={bkash} alt="bkash" />
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-right">
            <div className="input-group">
              <div className="footer-input">
                <div className="input-inner">
                  <div className="footer-second">
                    <div className="input-number">
                      <div className="input-tel">
                        <input type="tel" value="+88" placeholder="" />
                      </div>
                    </div>
                    <input type="submit" name="submit" value="Get app" />
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-logo">
              <div className="google-play-store">
                <a href="#">
                  <img src={googlePlay} alt="googlePlay" />
                </a>
              </div>
              <div className="apple-play-store">
                <a href="#">
                  <img src={applePlay} alt="applePlay" />
                </a>
              </div>
            </div>
            <div className="footer-contact">
              <div className="phone-number">
                <a href="tel:123456">123456</a>
              </div>
              <div className="email-address">
                <span>or</span>
                <a href="mailto:support@Ecommerce.com">support@Ecommerce.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
