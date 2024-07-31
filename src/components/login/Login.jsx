import React, { useState } from "react";
import "./login.css";
import { FaFacebookF } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import bd from "../../assets/favourites/bdicon.png";

const Login = () => {
  const [values, setValues] = useState("");

  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.length == 0) {
      setError(true);
    }
    console.log(values);
  };

  return (
    <section id="login">
      <div className="container">
        <div className="fav-login loform">
          <button className="loginBtn fbLoginBtn">
            <FaFacebookF className="fblogicon" />
            <span>
              Sign Up or Login with <b>Facebook</b>
            </span>
          </button>
          <button className="loginBtn mailLoginBtn">
            <IoIosMail className="maillogicon" />
            <span>
              Login with <b>Email</b>
            </span>
          </button>
          <div className="orLogin">
            <span>or</span>
          </div>
          <div className="loginNumberMsg">
            PLEASE ENTER YOUR MOBILE PHONE NUMBER
          </div>
          <form onSubmit={handleSubmit}>
            <div className="loginPhoneNumber">
              <div className="loginInput">
                <div className="countrySelector">
                  <select>
                    <option value="AF">Afghanistan (+93)</option>
                    <option value="AL">Albania (+355)</option>
                    <option value="DZ">Algeria (+213)</option>
                    <option value="BD">Bangladesh (+88)</option>
                    <option value="BB">Barbados (+1 246)</option>
                    <option value="BY">Belarus (+375)</option>
                    <option value="AF">Afghanistan (+93)</option>
                    <option value="AF">Afghanistan (+93)</option>
                    <option value="AF">Afghanistan (+93)</option>
                    <option value="AF">Afghanistan (+93)</option>
                    <option value="AF">Afghanistan (+93)</option>
                    <option value="AF">Afghanistan (+93)</option>
                  </select>
                  <div className="selectorFlag">
                    <img src={bd} alt="bdflag" />
                    <div className="downicon">
                      <IoIosArrowDown />
                    </div>
                  </div>
                </div>
                <input
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  type="tel"
                  placeholder="+88"
                  className="signNumber"
                  name="number"
                  onChange={(e) => setValues(e.target.value)}
                />
              </div>
              {error && values.length <= 0 ? (
                <span>Please enter a valid number.</span>
              ) : (
                ""
              )}
              <div className="signUp">
                <button class="loginBtn signBtn" type="submit">
                  sign up / login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
