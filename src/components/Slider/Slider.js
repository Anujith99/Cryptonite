import React from "react";
import { connect } from "react-redux";
import ReactSlider from "react-slick";
import SliderCard from "./SliderCard";

import "./Slider.scss";

import { settings } from "./SliderSettings";
import { fetchSliderItems } from "actions/actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AUDIO, VIDEOS, ARTICLES } from "helpers/constants";

class Slider extends React.Component {
  componentDidMount() {
    const { type, category } = this.props;
    let params = this.chooseParams();
    this.props.fetchSliderItems(type, category, params);
  }

  chooseParams = () => {
    const { type, category } = this.props;
    switch (type) {
      case AUDIO:
        return {
          term: category,
          limit: 5,
        };
      case VIDEOS:
        return {
          maxResults: 5,
          type: "video",
          videoEmbeddable: true,
        };
      case ARTICLES:
        return {
          limit: 5,
          keywords: category,
        };
      default:
        return {};
    }
  };

  render() {
    const { items, type, isLoading } = this.props;
    return (
      <div>
        <h5 className="slider-header">{type}</h5>
        {isLoading ? (
          <h4>Loading...</h4>
        ) : (
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
    isLoading: state.loading[`${type}Loading`],
  };
};

export default connect(mapStateToProps, { fetchSliderItems })(Slider);
