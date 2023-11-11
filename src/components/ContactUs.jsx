import React from "react";
import Header from "./header";
import Footer from "./footer";
import Joinus from "./JoinUs";
import Elsewhere from "./elsewhere";
import contact from "../../src/img/contact.jpeg";

const ContactUs = () => {
  return (
    <body>
      <Header />
      <div class="Italy-container">
        <img className="pic-italy" src={contact} alt="Your GIF" />
        <div class="input-container">
          <div class="input-box-Italy">
            <h1>Contact us</h1>
            <h5>
              Your Journey Begins with a Conversation - Reach Out to Us Today!
            </h5>
          </div>
        </div>
      </div>
      <div className="contacts-list">
        <div className="contact-left-side">
          <div className="contact-left-first">
            <h2 id="contact-right-first-heading">Commercial Contacts</h2>
            <p>To advertise on Tourista:</p>
            <p id="email">advertise@culturetrip.com</p>
          </div>
          <div className="contact-left-second">
            <p>To become an affiliate partner:</p>
            <p id="email">affiliate@culturetrip.com</p>
          </div>
          <div className="contact-left-third">
            <p>To contact the hotels team:</p>
            <p id="email">hotels@tourista.com</p>
          </div>
          <div className="contact-left-fourth">
            <p>Send your request to republish Tourista content:</p>
            <p id="email">contentlicensing@tourista.com</p>
          </div>
          <div className="contact-left-fifth">
            <p>To contact the experiences team:</p>
            <p id="email">experiences@tourista.com</p>
          </div>
        </div>
        <div className="contact-right-side">
          <div className="contact-right-first">
            <h2>Content Contacts</h2>
            <p>To report an issue to our content teams please contact: </p>
            <p id="email">corrections@tourista.com</p>
          </div>
          <div className="contact-right-second">
            <h2>Press Contact</h2>
            <p>
              If you’re a journalist / influencer with a press enquiry about
              Tourista,<br></br> please contact our press office:
            </p>
            <p id="email">pr@tourista.com</p>
          </div>
          <div className="contact-right-third">
            <h2>Partnership Contacts</h2>
            <p>For partnership opportunities:</p>
            <p id="email">partnerships@tourista.com</p>
          </div>
        </div>
      </div>
      <Elsewhere />
      <Joinus />
      <Footer />
    </body>
  );
};

export default ContactUs;
