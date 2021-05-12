import React from "react";
import { connect } from "react-redux";
import CardsContainer, { Card } from "components/CardsContainer/CardsContainer";
import StatsCard from "./StatsCard";

import SliderLoader from "components/Slider/SliderLoader";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";

import { getCryptoStats } from "actions/crytpoActions";

const COIN_STATISTICS = [
  {
    key: "usd_market_cap",
    text: "Market Cap",
  },
  {
    key: "usd_24h_vol",
    text: "24hr Volume",
  },
  {
    key: "usd_24h_change",
    text: "24hr Change",
  },
];

const HOUR_CHANGE = "usd_24h_change";

class CryptoStats extends React.Component {
  componentDidMount() {
    this.props.getCryptoStats(this.props.crypto);
  }

  render() {
    const { stats, loading, error } = this.props;
    return (
      <div className="section-less-padding">
        <div className="container">
          {loading ? (
            <SliderLoader />
          ) : error ? (
            <ErrorMessage />
          ) : (
            <CardsContainer>
              {COIN_STATISTICS.map((statistic, index) => (
                <Card key={index}>
                  <StatsCard
                    title={statistic.text}
                    value={stats[statistic.key]}
                    showArrow={statistic.key === HOUR_CHANGE}
                  />
                </Card>
              ))}
            </CardsContainer>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { crypto } = ownProps;
  return {
    stats: state[crypto].statistics.coinStatistics,
    loading: state.loading.cryptoStatsLoading,
    error: state.error.cryptoStatsError,
  };
};

export default connect(mapStateToProps, { getCryptoStats })(CryptoStats);
