import React from "react";
import GraphDisplay from "components/GraphDisplay/GraphDisplay";

class CryptoPage extends React.Component {
  render() {
    const { crypto } = this.props.match.params;
    return (
      <div>
        <GraphDisplay crypto={crypto} />
      </div>
    );
  }
}

export default CryptoPage;
