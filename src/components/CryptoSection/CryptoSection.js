import React from "react";
import CardsContainer, { Card } from "components/CardsContainer/CardsContainer";
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
            guru of your friend circle.
          </h6>
          <CardsContainer>
            {CRYPTO_TYPES.map((crypto, index) => (
              <Card key={index}>
                <CryptoCard crypto={crypto} />
              </Card>
            ))}
          </CardsContainer>
        </div>
      </section>
    );
  }
}

export default CryptoSection;
