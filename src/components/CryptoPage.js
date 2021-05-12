import React from "react";
import GraphDisplay from "components/GraphDisplay/GraphDisplay";
import CryptoStats from "components/CryptoStats/CryptoStats";

class CryptoPage extends React.Component {
  render() {
    const { crypto } = this.props.match.params;
    return (
      <div>
        <GraphDisplay crypto={crypto} />
        <CryptoStats crypto={crypto} />
      </div>
    );
  }
}

export default CryptoPage;
