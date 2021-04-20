import React from "react";
import dayjs from "dayjs";

var relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

class SliderCard extends React.Component {
  formatDate = (date) => {
    if (!date) return null;

    let formattedDate = dayjs(date).fromNow();

    return formattedDate;
  };

  render() {
    const { item } = this.props;
    return (
      <div className="slider-card">
        <div className="slider-img-container">
          <img className="slider-img" src={item.image} alt={item.title} />
        </div>
        <div className="slider-text">
          <div className="slider-text-header">
            <div className="slider-text-source">{item.source}</div>
            <div className="slider-text-headline">{item.title}</div>
          </div>
          <div className="slider-text-footer">
            <div className="slilder-text-date">
              {this.formatDate(item.published_at)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SliderCard;
