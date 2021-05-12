import React from "react";
import { Link } from "react-router-dom";
import CryptoIcon from "./CryptoIcon";

class CryptoCard extends React.Component {
  render() {
    const { crypto } = this.props;

    return (
      <Link to={crypto.path} className="crypto-card-link">
        <div className="crypto-card">
          <CryptoIcon id={crypto.text} />
          <div className="crypto-name">{crypto.text}</div>
        </div>
      </Link>
    );
  }
}

export default CryptoCard;
