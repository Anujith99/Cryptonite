import React from "react";

import "./StatsCard.scss";

class StatsCard extends React.Component {
  renderArrow = (value) => {
    if (value === null || value === undefined) return null;

    if (value > 0) {
      return <i className="fas fa-arrow-up" />;
    } else {
      return <i className="fas fa-arrow-down" />;
    }
  };

  formatValue = (num) => {
    if (num === null || num === undefined) return null;
    if (num > 999 && num < 1000000) {
      return (num / 1000).toFixed(1) + "K";
    } else if (num >= 1000000 && num < 1000000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000000000 && num < 1000000000000) {
      return (num / 1000000000).toFixed(1) + "B";
    } else if (num >= 1000000000000) {
      return (num / 1000000000000).toFixed(1) + "T";
    } else {
      return num.toFixed(1);
    }
  };
  render() {
    const { title, value, showArrow } = this.props;
    return (
      <div className="stats-card">
        <h4 className="stats-card-header">{title}</h4>
        <div className="stats-card-text">
          <h3 className="stats-card-value">{`$ ${this.formatValue(value)}`}</h3>
          {showArrow ? this.renderArrow(value) : ""}
        </div>
      </div>
    );
  }
}

export default StatsCard;
