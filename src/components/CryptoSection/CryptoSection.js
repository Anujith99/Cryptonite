import React from "react";
import CryptoCard from "./CryptoCard";
import "./CryptoCard.scss";

import { CRYPTO_TYPES } from "helpers/constants";

class CryptoSection extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h3 className="section-header">Popular Cryptocurrencies</h3>
          <h6 className="section-paragraph">
            With interactive graphs and latest statistics, you can be the crypto
            nerd of your friend circle.
          </h6>
          <div className="crypto-cards">
            {CRYPTO_TYPES.map((crypto, index) => (
              <CryptoCard key={index} crypto={crypto} />
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default CryptoSection;
