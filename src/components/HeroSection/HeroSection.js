import React from "react";
import HeroImg from "resources/hero-image-min.png";
import { ReactComponent as LeftQuote } from "resources/left quote.svg";
import { ReactComponent as RightQuote } from "resources/right quote.svg";

import "./HeroSection.scss";

class HeroSection extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="hero-section">
            <div className="hero-quote">
              <LeftQuote id="left-quote" />
              <h2 className="hero-quote-text">
                The future of money is digital currency
              </h2>
              <RightQuote id="right-quote" />
              <h4 className="hero-quote-subtext">-Bill Gates</h4>
            </div>
            <div className="hero-image-box">
              <img className="hero-img" src={HeroImg} alt="Cryptonite" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
