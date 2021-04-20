import React from "react";
import { connect } from "react-redux";
import ReactSlider from "react-slick";
import SliderCard from "./SliderCard";

import "./Slider.scss";

import { settings } from "./SliderSettings";
import { fetchSliderItems } from "actions/actions";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { VIDEOS } from "helpers/constants";

class Slider extends React.Component {
  componentDidMount() {
    const { type, category } = this.props;
    let params = {};
    if (type === VIDEOS) {
      params = {
        q: "nba",
        maxResults: 5,
      };
    }
    this.props.fetchSliderItems(type, category, params);
  }

  render() {
    // const { items } = this.props;
    const items = [
      {
        kind: "youtube#searchResult",
        etag: "FZMXZUVYDagTMG4mBFzs0w5RAWQ",
        id: {
          kind: "youtube#video",
          videoId: "l-5HuU369M4",
        },
        snippet: {
          publishedAt: "2021-04-20T02:16:48Z",
          channelId: "UCWJ2lWNubArHWmf3FIHbfcQ",
          title: "WARRIORS at SIXERS | FULL GAME HIGHLIGHTS | April 19, 2021",
          description:
            "WARRIORS at SIXERS | FULL GAME HIGHLIGHTS | April 19, 2021 Stephen Curry recorded 49 PTS (10 3PM) for the Golden State Warriors as they defeated the ...",
          thumbnails: {
            default: {
              url: "https://i.ytimg.com/vi/l-5HuU369M4/default.jpg",
              width: 120,
              height: 90,
            },
            medium: {
              url: "https://i.ytimg.com/vi/l-5HuU369M4/mqdefault.jpg",
              width: 320,
              height: 180,
            },
            high: {
              url: "https://i.ytimg.com/vi/l-5HuU369M4/hqdefault.jpg",
              width: 480,
              height: 360,
            },
          },
          channelTitle: "NBA",
          liveBroadcastContent: "none",
          publishTime: "2021-04-20T02:16:48Z",
        },
      },
    ];
    return (
      <div>
        <h5 className="slider-header">{this.props.type}</h5>
        <ReactSlider {...settings}>
          {items.map((item, index) => (
            <SliderCard key={index} item={item} />
          ))}
        </ReactSlider>
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
