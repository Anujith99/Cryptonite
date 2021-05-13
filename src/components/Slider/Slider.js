import React from "react";
import { connect } from "react-redux";
import ReactSlider from "react-slick";
import SliderCard from "./SliderCard";

import "./Slider.scss";

import SliderLoader from "./SliderLoader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";
import { settings } from "./SliderSettings";
import { fetchSliderItems } from "actions/newsActions";
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
    const { type } = this.props;
    switch (type) {
      case AUDIO:
        return {
          lang: "en_us",
          limit: 5,
          entity: "podcast",
        };
      case VIDEOS:
        return {
          maxResults: 5,
          type: "video",
          videoEmbeddable: true,
        };
      case ARTICLES:
        return {
          token: process.env.REACT_APP_ARTICLES_API_KEY,
          lang: "en",
          max: 5,
        };
      default:
        return {};
    }
  };

  render() {
    const { items, type, isLoading, error } = this.props;
    return (
      <div>
        <h5 className="slider-header">{type}</h5>
        {isLoading ? (
          <SliderLoader />
        ) : error ? (
          <ErrorMessage />
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
  const topic = state[category].news;
  return {
    items: topic[type],
    isLoading: state.loading[`${type}Loading`],
    error: state.error[`${type}Error`],
  };
};

export default connect(mapStateToProps, { fetchSliderItems })(Slider);
