// App.jsx

import React from "react";
import BlogBg from "../../src/img/BlogBG.png";
import Header from "./header";
import Footer from "./footer";
import Elsewhere from "./elsewhere";
import Joinus from "./JoinUs";
const Blog = () => {
  return (
    <body>
      <Header />
      <div class="Italy-container">
        <img className="pic-italy" src={BlogBg} alt="Blog" />
        <div class="input-container">
          <div class="input-box-Italy">
            <h1>Blog</h1>
            <h5>Blog articles for "Inspiration".</h5>
          </div>
        </div>
      </div>
      <div className="categories-flexbox">
        <div className="categories-all">
          <p id="categeries-text-all">All articles </p>
        </div>
        <div className="categories">
          <p id="categeries-text">Food & Drink </p>
        </div>
        <div className="categories">
          <p id="categeries-text">Inspiration </p>
        </div>
        <div className="categories">
          <p id="categeries-text">Local Guides </p>
        </div>
        <div className="categories">
          <p id="categeries-text">See & Do </p>
        </div>
        <div className="categories">
          <p id="categeries-text">Travel Tips </p>
        </div>
        <div className="categories">
          <p id="categeries-text">Where to stay </p>
        </div>
      </div>
      <div class="blog-articles">
        <div className="article-length-top">
          <div class="article-container-top">
            <div class="article-image-breakfast"></div>
            <div class="article-content">
              <p class="article-title"> Food & Drink</p>
              <p class="article-description-blog">
                Founded by Pope Julius II in the early 16th century and enlarged
                by successive pontiffs, the Vatican Museums boast one of the
                world's greatest art…
              </p>
            </div>
          </div>
          <div class="article-container-top">
            <div class="article-image-see"></div>
            <div class="article-content">
              <p class="article-title"> See & Do</p>
              <p class="article-description-blog">
                Everyone wants to see the Colosseum, and it doesn’t disappoint,
                especially if accompanied by tales of armored gladiators and
                hungry lions. More...
              </p>
            </div>
          </div>
        </div>
        <div className="article-length-upper">
          <div class="article-container-upper">
            <div class="article-image-inspration"></div>
            <div class="article-content">
              <p class="article-title"> Inspiration</p>
              <p class="article-description-blog">
                Founded by Pope Julius II in the early 16th century and enlarged
                by successive pontiffs, the Vatican Museums boast one of the
                world's greatest art…
              </p>
            </div>
          </div>
          <div class="article-container-upper">
            <div class="article-image-travel-tips"></div>
            <div class="article-content">
              <p class="article-title"> Travel Tips</p>
              <p class="article-description-blog">
                Everyone wants to see the Colosseum, and it doesn’t disappoint,
                especially if accompanied by tales of armored gladiators and
                hungry lions. More...
              </p>
            </div>
          </div>
          <div class="article-container-upper">
            <div class="article-image-drink"></div>
            <div class="article-content">
              <p class="article-title"> Food & Drink</p>
              <p class="article-description-blog">
                In the city of outstanding churches, none can hold a candle to
                St Peter's, Italy’s largest, richest and most spectacular
                basilica. Built atop a 4th…
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

export default Blog;
