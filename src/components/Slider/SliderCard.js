import React from "react";

class SliderCard extends React.Component {
  render() {
    return (
      <div className="slider-card">
        <div className="slider-img"></div>
        <div className="slider-text">
          <div className="slider-text-header">
            <div className="slider-text-source">New york times</div>
            <div className="slider-text-headline">
              Paypal launches Cryptocurrency Checkout Service in US
            </div>
          </div>
          <div className="slider-text-footer">
            <div className="slilder-text-date">2 days go</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderCard;
