import React from "react";

import "./GraphDisplay.scss";

class GraphDisplay extends React.Component {
  render() {
    return (
      <div className="section">
        <h3 className="graph-header">{this.props.crypto}</h3>
      </div>
    );
  }
}

export default GraphDisplay;
