import React from "react";
import about from "../../src/img/about_header.png";
import Header from "./header";
import Joinus from "./JoinUs";
import Elsewhere from "./elsewhere";
import map from "../../src/img/map.png";
import food from "../../src/img/food.png";
import heart from "../../src/img/heart.png";
import callcenter2 from "../../src/img/Callcenter2.png";
import callcenter from "../../src/img/Callcenter.png";
import textbubble from "../../src/img/Text_bubble.png";
import textbubble_second from "../../src/img/Text_bubble_second.png";
import Footer from "./footer";
const About = () => {
  return (
    <body>
      <Header />
      <div class="Italy-container">
        <img className="pic-italy" src={about} alt="Your GIF" />
        <div class="input-container">
          <div class="input-box-Italy">
            <h1>About us</h1>
            <h5>Discover Our Passion for Travel and Adventure.</h5>
          </div>
        </div>
      </div>{" "}
      <div className="text-about">
        <h2>Changing how the world travels</h2>
        <p>
          We’re on a journey to transform ordinary trips into extraordinary
          ones. We are your guide, bringing you personal experiences. Wherever
          your travels take you, we’ll show you the unique and unmissable things
          to do in your destination. With GetYourGuide on your side (and in your
          pocket), creating memorable moments has never been easier. Today,
          millions have used GetYourGuide to turn their travel dreams into
          reality. And we’re just getting started. We're changing the way people
          connect to the places they visit so anyone can create their dream
          vacation. It’s your journey, your way.
        </p>
      </div>
      <div class="Branding">
        <h2 className="branding_heading">Why us?</h2>
        <div className="blog_length">
          <div class="why-container">
            <div class="why-image">
              <img src={map} alt="map" />
            </div>
            <div class="why-content">
              <p>more than 149 travel titles currently in print</p>
            </div>
          </div>
          <div class="why-container">
            <div class="why-image">
              <img src={food} alt="map" />
            </div>
            <div class="why-content">
              <p>Supporting millions of travellers since 1982</p>
            </div>
          </div>
          <div class="why-container">
            <div class="why-image">
              <img src={heart} alt="map" />
            </div>
            <div class="why-content">
              <p>more than 149 travel titles currently in print</p>
            </div>
          </div>
        </div>
      </div>
      <div class="Expert">
        <h2 className="branding_heading">Our Local Experts</h2>
        <div className="expert_length">
          <img className="callcenter" src={callcenter} alt="" />
          <img className="callcenter2" src={callcenter2} alt="" />
        </div>
        <img className="textbubble" src={textbubble} alt="" />
        <img className="textbubble_second" src={textbubble_second} alt="" />
      </div>
      <Elsewhere />
      <Joinus />
      <Footer />
    </body>
  );
};

export default About;
