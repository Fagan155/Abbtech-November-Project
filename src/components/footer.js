import footerLogo from "../../src/img/Logo-footer.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-body">
        <img src={footerLogo} alt="" className="footer-logo" />
        <p id="footer-parag">
          Discover the world's wonders and let us be your trusted guide to
          extraordinary destinations.
        </p>
        <p id="copyright">
          © Copyright 2023 The Culture Trip Ltd. All Rights Reserved.
        </p>
      </div>
      <div className="footer-menu">
        <p id="footer-menu">Menu</p>
        <ul>
          <Link to="/destinations">
            <li>Destinations</li>
          </Link>
          <li>Private trips</li>
          <Link to="/Blog">
            {" "}
            <li>Blog</li>
          </Link>
          <Link to="/about">
            {" "}
            <li>About us</li>
          </Link>
        </ul>
      </div>
      <div className="footer-support">
        <p id="footer-support">Support</p>
        <ul>
          <Link to="/contactus">
            <li>Contact us</li>
          </Link>
          <Link to="/FAQ">
            <li id="FAQ">FAQ</li>
          </Link>
          <li>Privacy Policy</li>
          <li>Terms of use</li>
        </ul>
      </div>
      <div className="footer-social">
        <p id="footer-social">Follow us</p>
        <ul>
          <li>Instagram</li>
          <li>Facebook</li>
          <li>linkedin</li>
          <li>Tiktok</li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
