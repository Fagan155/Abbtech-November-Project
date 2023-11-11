// Filename - ContactUs.jsx
import React from "react";
import Header from "./header";
import Footer from "./footer";
import italy from "../../src/img/Italy.png";
import Map_Italy from "../../src/img/Map_Italy.png";
import italy_header from "../../src/img/italy_header.png";
import Elsewhere from "./elsewhere";
import Joinus from "./JoinUs";
import done from "../../src/img/done.png";
import hint from "../../src/img/hint.png";
import visa from "../../src/img/visa.png";
import transportation from "../../src/img/transportation.png";
const ContactUs = () => {
  return (
    <body>
      <Header />
      <div class="Italy-container">
        <img className="pic-italy" src={italy} alt="Your GIF" />
        <div class="input-container">
          <div class="input-box-Italy">
            <h1>Italy</h1>
            <h5>Trips you couldn't plan, even if you wanted to.</h5>
            <input
              className="Italy-header-submit"
              type="submit"
              value="Create a trip"
              style={{
                padding: "10px",
              }}
            ></input>
          </div>
        </div>
      </div>
      <div class="top-destinations">
        <h2 className="top-destinations-heading">Available trips</h2>
        <div className="destinations-blog-length">
          <div class="destination-container">
            <div class="blog-image-destinations-Italy"></div>
            <div class="blog-content">
              <p class="blog-title"> ITALY TRIP</p>
              <p class="blog-description">
                <h4>Roma</h4>
              </p>
              <div class="blog-date">
                <p>34 available trip plans</p>
                <p>
                  Starts from <b>$199.00</b>
                </p>
              </div>
            </div>
          </div>

          <div class="destination-container">
            <div class="blog-image-destinations-portugal"></div>
            <div class="blog-content-second">
              <p class="blog-title-second">PORTUGAL TRIP</p>
              <p class="blog-description-second">
                <h4>Foodie Puglia</h4>
              </p>
              <div class="blog-date">
                <p>54 available trip plans</p>
                <p>
                  Starts from <b>$250.00</b>
                </p>
              </div>
            </div>
          </div>
          <div class="destination-container">
            <div class="blog-image-destinations-turkey"></div>
            <div class="blog-content-third">
              <p class="blog-title-third">TURKEY TRIP</p>
              <p class="blog-description-third">
                <h4>Foodie Puglia</h4>{" "}
              </p>
              <div class="blog-date">
                <p>19 available trip plans</p>
                <p>
                  Starts from <b>$400.00</b>
                </p>
              </div>
            </div>
          </div>
          <div class="destination-container">
            <div class="blog-image-destinations-icelandd"></div>
            <div class="blog-content-third">
              <p class="blog-title-third">ICELAND TRIP</p>
              <p class="blog-description-third">
                <h4>International Iceland</h4>{" "}
              </p>
              <div class="blog-date">
                <p>105 available trip plans</p>
                <p>
                  Starts from <b>$299.00</b>
                </p>
              </div>
            </div>
          </div>
          <div class="destination-container">
            <div class="blog-image-destinations-costa"></div>
            <div class="blog-content-third">
              <p class="blog-title-third">COSTA RICA TRIP</p>
              <p class="blog-description-third">
                <h4>International Costa Rica</h4>{" "}
              </p>
              <div class="blog-date">
                <p>23 available trip plans</p>
                <p>
                  Starts from <b>$250.00</b>
                </p>
              </div>
            </div>
          </div>
          <div class="destination-container">
            <div class="blog-image-destinations-argentina"></div>
            <div class="blog-content-third">
              <p class="blog-title-third">ARGENTINA TRIP</p>
              <p class="blog-description-third">
                <h4>International Argentina</h4>{" "}
              </p>
              <div class="blog-date">
                <p>87 available trip plans</p>
                <p>
                  Starts from <b>$400.00</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home_pic">
        <img src={Map_Italy} alt="" />
        <div class="overlay-container">
          <div class="blog-container-map">
            <div class="blog-image-map"></div>
            <div class="blog-content">
              <p class="blog-description">
                <h4>
                  Have the drive of your life on the cliff roads of the AAmalfi
                  Coast
                </h4>
              </p>
              <div class="blog-date"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="Itinerary">
        <h2 className="Itinerary-heading">
          Must-see attractions for your itinerary
        </h2>
        <div className="Itinerary-length">
          <div class="Itinerary-container">
            <div class="Itinerary-image"></div>
            <div class="Itinerary-content">
              <p class="Itinerary-title"> Vatican museums</p>
              <p class="Itinerary-description">
                Founded by Pope Julius II in the early 16th century and enlarged
                by successive pontiffs, the Vatican...
              </p>
            </div>
          </div>
          <div class="Itinerary-container">
            <div class="Itinerary-image-second"></div>
            <div class="Itinerary-content">
              <p class="Itinerary-title">Colosseum</p>
              <p class="Itinerary-description">
                <h4>
                  Everyone wants to see the Colosseum, and it doesn’t
                  disappoint, especially if accompanied by tales of armored
                  gladiators and hungry lions. More...
                </h4>
              </p>
            </div>
          </div>
          <div class="Itinerary-container">
            <div class="Itinerary-image-third"></div>
            <div class="Itinerary-content">
              <p class="Itinerary-title">St Peter’s basilica</p>
              <p class="Itinerary-description">
                <h4>
                  In the city of outstanding churches, none can hold a candle to
                  St Peter's, Italy’s largest, richest and most spectacular
                  basilica. Built atop a 4th…
                </h4>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home_pic">
        <img src={italy_header} alt="" />
        <div class="overlay-container-italy">
          <p>
            We have a very good time all the way. The Capri boat ride is
            excellent and so much fun with the crew! They are awesome.
          </p>
        </div>
      </div>
      <div class="Branding">
        <h2 className="branding_heading">
          Expert guidance to help you <br></br>plan your trip
        </h2>
        <div className="guidance_length">
          <div class="guidance-container">
            <div class="guidance-image">
              <img src={done} alt="" />
            </div>
            <div class="guidance-content">
              <h4>Best Things to Do</h4>
              <p>
                Italy has so many delights to offer its visitors, it's hard to
                know where to start. Here's our pick of the best experiences
                Italy has to offer you.
              </p>
            </div>
          </div>
          <div class="guidance-container">
            <div class="guidance-image">
              <img src={hint} alt="" />
            </div>
            <div class="guidance-content">
              <h4>Things to Know</h4>
              <p>
                With so many attractions, it's hard to know where to begin with
                a trip to Italy. Here's some local insight into the essential
                things to know before you go.
              </p>
            </div>
          </div>
          <div class="guidance-container">
            <div class="guidance-image">
              <img src={transportation} alt="" />
            </div>
            <div class="guidance-content">
              <h4>Transportation</h4>
              <p>
                Your guide to traveling independently across Italy, from the
                Alps to the islands.
              </p>
            </div>
          </div>
          <div class="guidance-container">
            <div class="guidance-image">
              <img src={visa} alt="" />
            </div>
            <div class="guidance-content">
              <h4>Visa Requirements</h4>
              <p>
                Italy is one of the most visited countries in Europe and its
                many attractions are hard to resist. Find out if you need a visa
                before you go.
              </p>
            </div>
          </div>
          <div class="guidance-container">
            <div class="guidance-image">
              <img src={done} alt="" />
            </div>
            <div class="guidance-content">
              <h4>Best Things to Do</h4>
              <p>
                Italy has so many delights to offer its visitors, it's hard to
                know where to start. Here's our pick of the best experiences
                Italy has to offer you.
              </p>
            </div>
          </div>
          <div class="guidance-container">
            <div class="guidance-image">
              <img src={done} alt="" />
            </div>
            <div class="guidance-content">
              <h4>Best Things to Do</h4>
              <p>
                Italy has so many delights to offer its visitors, it's hard to
                know where to start. Here's our pick of the best experiences
                Italy has to offer you.
              </p>
            </div>
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
