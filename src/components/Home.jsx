import React from "react";
import Gif from "../../src/img/Homepage.gif";
import map from "../../src/img/map.png";
import food from "../../src/img/food.png";
import heart from "../../src/img/heart.png";
import callcenter2 from "../../src/img/Callcenter2.png";
import callcenter from "../../src/img/Callcenter.png";
import textbubble from "../../src/img/Text_bubble.png";
import textbubble_second from "../../src/img/Text_bubble_second.png";
import home_pic from "../../src/img/home_pic.png";
import person from "../../src/img/person.png";
import Footer from "./footer";
import Header from "./header";
import Elsewhere from "./elsewhere";
import Joinus from "./JoinUs";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <body>
      <Header />
      <main>
        <div class="gif-container">
          <img class="gif" src={Gif} alt="Your GIF" />
          <div class="input-container">
            <div class="input-box">
              <h1>We create trips you love</h1>
              <h6>Trips you couldn't plan, even if you want to</h6>
              <input type="text" placeholder="Where do you want to go" />
            </div>
          </div>
        </div>
        <div class="trending">
          <h2 className="trending_heading">Trending Now</h2>
          <div className="blog_length">
            <div class="blog-container">
              <div class="blog-image"></div>
              <div class="blog-content">
                <p class="blog-title"> SPAIN TRIP</p>
                <p class="blog-description">
                  <h4>Magical Madrid to Marrakech by Train</h4>
                </p>
                <div class="blog-date">
                  <p>12 days</p>
                  <p>
                    From <b>$1299.00</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-container">
              <div class="blog-image-second"></div>
              <div class="blog-content-second">
                <p class="blog-title-second">ITALY TRIP</p>
                <p class="blog-description-second">
                  <h4>Spectacular Sicily</h4>
                </p>
                <div class="blog-date">
                  <p>5 days</p>
                  <p>
                    From <b>$250.00</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-container">
              <div class="blog-image-third"></div>
              <div class="blog-content-third">
                <p class="blog-title-third">TURKEY TRIP</p>
                <p class="blog-description-third">
                  <h4>International Istanbul</h4>{" "}
                </p>
                <div class="blog-date">
                  <p>7 days</p>
                  <p>
                    From <b>$400.00</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Branding">
          <h2 className="branding_heading">Brand new trips</h2>
          <div className="blog_length">
            <div class="blog-container">
              <div class="blog-image-four"></div>
              <div class="blog-content-four">
                <p class="blog-title-four"> SPAIN TRIP</p>
                <p class="blog-description-four">
                  <h4>Magical Madrid to Marrakech by Train</h4>
                </p>
                <div class="blog-date">
                  <p>12 days</p>
                  <p>
                    From <b>$1299.00</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-container">
              <div class="blog-image-five"></div>
              <div class="blog-content-second">
                <p class="blog-title-second">ITALY TRIP</p>
                <p class="blog-description-second">
                  <h4>Spectacular Sicily</h4>
                </p>
                <div class="blog-date">
                  <p>5 days</p>
                  <p>
                    From <b>$250.00</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-container">
              <div class="blog-image-six"></div>
              <div class="blog-content-third">
                <p class="blog-title-third">TURKEY TRIP</p>
                <p class="blog-description-third">
                  <h4>International Istanbul</h4>{" "}
                </p>
                <div class="blog-date">
                  <p>7 days</p>
                  <p>
                    From <b>$400.00</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
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
        <div className="home_pic">
          <img src={home_pic} alt="" />
          <div class="overlay-container">
            <p>
              “Tiago put together an epic itinerary for me and my friends. He
              showed us some hidden hiking trails and amazing local food spots.
              He even met us for a coffee to make sure we had everything we
              needed.
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
        <div class="Europe">
          <h2 className="branding_heading">Europe</h2>
          <div className="blog_length">
            <div class="blog-container">
              <div class="blog-image-iceland"></div>
              <div class="blog-content-iceland">
                <p class="blog-title-iceland"> ICELAND TRIP</p>
                <p class="blog-description-iceland">
                  <h4>Volcanic Iceland</h4>
                </p>
                <div class="blog-date">
                  <p>7 days</p>
                  <p>
                    From <b>$2299.00</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-container">
              <div class="blog-image-scottish"></div>
              <div class="blog-content-scottish">
                <p class="blog-title-scottish">SCOTLAND TRIP</p>
                <p class="blog-description-scottish">
                  <h4>The Scottish Highlands</h4>
                </p>
                <div class="blog-date">
                  <p>7 days</p>
                  <p>
                    From <b>$1687.00</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-container">
              <div class="blog-image-portugal"></div>
              <div class="blog-content-portugal">
                <p class="blog-title-portugal">PORTUGAL TRIP</p>
                <p class="blog-description-portugal">
                  <h4>Atlantic Azores</h4>{" "}
                </p>
                <div class="blog-date">
                  <p>6 days</p>
                  <p>
                    From <b>$1220.00</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="Asia">
          <h2 className="branding_heading">Asia</h2>
          <div className="blog_length">
            <div class="blog-container">
              <div class="blog-image-china"></div>
              <div class="blog-content-china">
                <p class="blog-title-china"> CHINA TRIP</p>
                <p class="blog-description-china">
                  <h4>Icons Of China</h4>
                </p>
                <div class="blog-date">
                  <p>5 days</p>
                  <p>
                    From <b>$1399.00</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-container">
              <div class="blog-image-thailand"></div>
              <div class="blog-content-thailand">
                <p class="blog-title-thailand">THAILAND TRIP</p>
                <p class="blog-description-thailand">
                  <h4>Cambodia & Vietnam</h4>
                </p>
                <div class="blog-date">
                  <p>7 days</p>
                  <p>
                    From <b>$2350.00</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="blog-container">
              <div class="blog-image-taiwan"></div>
              <div class="blog-content-taiwan">
                <p class="blog-title-taiwan">TAIWAN TRIP</p>
                <p class="blog-description-taiwan">
                  <h4>A Taste Of Taiwan</h4>{" "}
                </p>
                <div class="blog-date">
                  <p>7 days</p>
                  <p>
                    From <b>$1900.00</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Elsewhere />
        <Joinus />
      </main>
      <Footer />
    </body>
  );
};

export default Home;
