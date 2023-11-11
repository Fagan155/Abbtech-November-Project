import React from "react";
import "../App.css";
import Logo from "../../src/img/Logo.png";
import { Link } from "react-router-dom";
const Forgot = () => {
  return (
    <div className="main">
      <section className="left-side"></section>
      <section className="right-side-forgot">
        <div className="right-logo">
          <img src={Logo} alt="Logo" className="Logo" />
        </div>
        <div className="right-input">
          <h2>Looging to change your password?</h2>
          <h4>
            Enter your email below and we will send <br></br>instructions on how
            to reset your password
          </h4>
          <form>
            <label for="email">Email</label>
            <br />
            <br />
            <input type="text" id="email" name="email" />
            <br />
            <br />
            <Link to="/Signin">
              <input type="submit" value="Reset my password"></input>;
            </Link>
          </form>
        </div>
        <div></div>
      </section>
    </div>
  );
};

export default Forgot;
