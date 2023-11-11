import React from "react";

import destinationGif from "../../src/img/Destinations.gif";
import person from "../../src/img/person.png";
import destinations_pic from "../../src/img/destination-pic.png";
import Footer from "./footer";
import Header from "./header";
import { Link } from "react-router-dom";
const Destinations = () => {
  return (
    <body>
      <Header />
      <div class="gif-container">
        <img class="gif" src={destinationGif} alt="Your GIF" />
        <div class="input-container">
          <div class="input-box">
            <h1>Explore places on Tourista</h1>
            <h6>Destinations</h6>
          </div>
        </div>
      </div>
      <div className="destinations-ul">
        <div className="destionations-borders">
          <h2>Europe</h2>
          <ul>
            <li>Azores</li>
            <li>Crotia</li>
            <li>Georgia</li>
            <li>Germany</li>
            <li>Greece</li>
            <li>Iceland</li>
            <li>Ireland</li>
            <Link to="/Destinations/Italy">
              {" "}
              <li>Italy</li>
            </Link>
            <li>Portugal</li>
            <li>Scotland</li>
            <li>Spain</li>
            <li>United Kingdom</li>
          </ul>
        </div>
        <div className="destionations-borders">
          <h2>Asia</h2>
          <ul>
            <li>Cambodia</li>
            <li>China</li>
            <li>India</li>
            <li>Indonesia</li>
            <li>Japan</li>
            <li>Jordan</li>
            <li>South Korea</li>
            <li>Sri Lanka</li>
            <li>Taiwan</li>
            <li>Thailand</li>
            <li>Turkey</li>
            <li>Vietnam</li>
          </ul>
        </div>
        <div className="destionations-borders">
          <h2>Africa</h2>
          <ul>
            <li>Egypt</li>
            <li>Ethiopia</li>
            <li>Kenya</li>
            <li>Ghana</li>
            <li>Madagascar</li>
            <li>Mauritius</li>
            <li>Morocco</li>
            <li>Namibia</li>
            <li>Rwanda</li>
            <li>South Africa</li>
            <li>Uganda</li>
            <li>Tanzania & Zanzibar</li>
          </ul>
        </div>
        <div className="destionations-borders">
          <h2>C/America</h2>
          <ul>
            <li>Belize</li>
            <li>Costa Rica</li>
            <li>Cuba</li>
            <li>Dominican Republic</li>
            <li>Guatemala</li>
            <li>Honduras</li>
            <li>Jamaica</li>
            <li>Nicaragua</li>
            <li>Mexico</li>
            <li>Panama</li>
            <li>Puerto Rico</li>
            <li>Trinidad and Tobago</li>
          </ul>
        </div>
        <div className="destionations-nonborders">
          <h2>S/America</h2>
          <ul>
            <li>Argentina</li>
            <li>Bolivia</li>
            <li>Brazil</li>
            <li>Chile</li>
            <li>Colombia</li>
            <li>Ecuador</li>
            <li>Peru</li>
          </ul>
        </div>
      </div>
      <div class="top-destinations">
        <h2 className="top-destinations-heading">Available trips</h2>
        <div className="destinations-blog-length">
          <div class="destination-container">
            <Link to="/destinations/Italy">
              <div class="blog-image-destinations-Italy"></div>
            </Link>
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
        <img src={destinations_pic} alt="" />
        <div class="overlay-container">
          <p>
            “Tiago put together an epic itinerary for me and my friends. He
            showed us some hidden hiking trails and amazing local food spots. He
            even met us for a coffee to make sure we had everything we needed.
          </p>
          <p id="Thanks">Thanks Tiago!"</p>
        </div>
        <div class="overlay-container-second">
          <div className="div_container_img">
            <img src={person} alt="" />
          </div>
          <div className="div_container_par">
            <p id="craft">Trip crafted by</p>
            <p>Tiago | Local expert in Portugal</p>
          </div>
        </div>
      </div>
      <div className="combined-body">
        <h2>Join our travel revolution</h2>
        <p id="combined">
          Sign up to stay in the know - hot new travel spots, how we strive to
          <br />
          make the world a better place, and all sorts of surprises.
        </p>
        <div class="combined-input">
          <input
            type="text"
            class="bordered-input"
            id="signupInput"
            placeholder="Email"
          />

          <button class="signup-button">Sign Up</button>
        </div>
      </div>
      <Footer />
    </body>
  );
};

export default Destinations;
