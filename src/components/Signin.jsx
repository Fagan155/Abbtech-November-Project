import React from "react";
import "../App.css";
import Logo from "../../src/img/Logo.png";
import Apple from "../../src/img/Apple.png";
import Facebook from "../../src/img/Facebook.png";
import Google from "../../src/img/Google.png";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <div className="main">
      <section className="left-side"></section>
      <section className="right-side">
        <div className="right-logo">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>
        <div className="right-input">
          <h3>Sign in for your exciting journey</h3>
          <form>
            <label for="email">Email</label>
            <br />
            <br />
            <input type="text" id="email" name="email" />
            <br />
            <br />
            <label for="password">Password</label>
            <br />
            <br />
            <input type="password" id="password" name="password" />
            <br />
            <br />
            <Link to="/Forgot">
              <p id="Forgot_Password">Forgot password?</p>
            </Link>
            <Link to="/Home">
              <input type="submit" value="Sign in"></input>;
            </Link>
          </form>
        </div>
        <div className="right-icon">
          <p id="right-icon-paragrapgh">or use one of this</p>
          <div className="right-icon-image">
            <img src={Apple} alt="Apple" />
            <img src={Facebook} alt="Apple" />
            <img src={Google} alt="Apple" />
          </div>{" "}
        </div>
        <div className="right-beyond">
          <p>
            Don’t have an account? <span>Create one for new adventure!</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Signin;
