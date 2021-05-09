import React from "react";
import { connect } from "react-redux";
import { getCryptoData } from "actions/crytpoActions";
import "./GraphDisplay.scss";

class GraphDisplay extends React.Component {
  componentDidMount() {
    this.props.getCryptoData(this.props.crypto);
  }

  render() {
    return (
      <div className="section">
        <h3 className="graph-header">{this.props.crypto}</h3>
      </div>
    );
  }
}

export default connect(null, { getCryptoData })(GraphDisplay);
