import React from "react";
import dayjs from "dayjs";

import { VIDEOS } from "helpers/constants";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

class SliderCard extends React.Component {
  formatDate = (date) => {
    if (!date) return null;

    let formattedDate = dayjs(date).fromNow();

    return formattedDate;
  };

  render() {
    const { item, type } = this.props;
    return (
      <div className="slider-card">
        <div className="slider-img-container">
          <img
            className={`slider-img ${
              type === VIDEOS ? "slider-video-tbn" : ""
            }`}
            src={item.image}
            alt={item.title}
          />
          {type === VIDEOS ? <i className="fas fa-play"></i> : null}
        </div>
        <div className="slider-text">
          <div className="slider-text-header">
            <div className="slider-text-source">{item.source}</div>
            <div className="slider-text-headline">{item.title}</div>
          </div>
          <div className="slider-text-footer">
            <div className="slilder-text-date">
              {this.formatDate(item.publishedAt)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderCard;
