import React from "react";

class CryptoCard extends React.Component {
  render() {
    const { crypto } = this.props;

    return (
      <div className="crypto-card">
        <div className="crypto-name">{crypto.text}</div>
      </div>
    );
  }
}

export default CryptoCard;
