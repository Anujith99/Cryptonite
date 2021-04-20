import React from "react";
import { connect } from "react-redux";
import ReactSlider from "react-slick";
import SliderCard from "./SliderCard";

import "./Slider.scss";

import { settings } from "./SliderSettings";
import { getArticles } from "actions/actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Slider extends React.Component {
  componentDidMount() {
    if (this.props.type === "Articles") {
      this.props.getArticles({
        limit: 5,
        keywords: "cryptocurrency",
      });
    }
  }

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

export default connect(null, { getArticles })(Slider);
