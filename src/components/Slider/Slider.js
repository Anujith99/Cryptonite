import React from "react";
import { connect } from "react-redux";
import ReactSlider from "react-slick";
import SliderCard from "./SliderCard";

import "./Slider.scss";

import { settings } from "./SliderSettings";
import { fetchSliderItems } from "actions/actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AUDIO } from "helpers/constants";

class Slider extends React.Component {
  componentDidMount() {
    const { type, category } = this.props;
    let params = {};
    if (type === AUDIO) {
      params = {
        term: category,
        limit: 5,
      };
    }
    this.props.fetchSliderItems(type, category, params);
  }

  render() {
    const { items, type } = this.props;
    return (
      <div>
        <h5 className="slider-header">{type}</h5>
        {!items.length ? null : (
          <ReactSlider {...settings}>
            {items.map((item, index) => (
              <SliderCard key={index} item={item} type={type} />
            ))}
          </ReactSlider>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { category, type } = ownProps;
  const topic = state[category];
  return {
    items: topic[type],
  };
};

export default connect(mapStateToProps, { fetchSliderItems })(Slider);
