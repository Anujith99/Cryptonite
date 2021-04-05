import React from "react";
import ReactSlider from "react-slick";
import SliderCard from "./SliderCard";

import "./Slider.scss";

import { settings } from "./SliderSettings";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slider extends React.Component {
  render() {
    return (
      <div>
        <h5 className="slider-header">{this.props.type}</h5>
        <ReactSlider {...settings}>
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
          <SliderCard />
        </ReactSlider>
      </div>
    );
  }
}

export default Slider;
