import { Link } from "react-router-dom";
import Logo from "../../src/img/Logo.png";

const Header = () => {
  return (
    <header>
      <div className="header-top">
        <div className="header_home">
          <nav>
            {" "}
            <Link to="/about">About us</Link> <Link to="/FAQ">FAQ</Link>{" "}
            <Link to="/Blog">Blog</Link> <Link to="/contactus">Contact us</Link>
          </nav>
        </div>
        <div class="currency">
          <select name="currency" id="currency">
            <option value="USD">US$</option>
            <option value="EUR">EUR</option>
            <option value="JPY">JPY</option>
            <option value="GBP">GBP</option>
          </select>
        </div>
      </div>
      <div className="logo_part_home">
        <div className="destination_link">
          <ul className="destination">
            <Link to="/destinations">
              <li>Destionations</li>
            </Link>
            <li>Private trips</li>
          </ul>
        </div>
        <div className="logo_home">
          {" "}
          <Link to="/Home">
            {" "}
            <img src={Logo} alt="" className="" />
          </Link>
        </div>
        <div className="input_home">
          <form>
            <input
              className="lucky_submit"
              type="submit"
              value="I am feeling lucky"
            ></input>
            <Link to="/Signin">
              <input
                className="login_submit"
                type="submit"
                value="Login"
              ></input>{" "}
            </Link>
          </form>
        </div>
      </div>
    </header>
  );
};
export default Header;
