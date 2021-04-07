import React from "react";
import CryptoIcon from "./CryptoIcon";

class CryptoCard extends React.Component {
  render() {
    const { crypto } = this.props;

    return (
      <div className="crypto-card">
        <CryptoIcon id={crypto.text} />
        <div className="crypto-name">{crypto.text}</div>
      </div>
    );
  }
}

export default CryptoCard;
