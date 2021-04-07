import React from "react";
class CryptoIcon extends React.Component {
  state = {
    logoComponent: "div",
  };

  componentDidMount() {
    import(`./Icons/${this.props.id}`).then((m) => {
      this.setState({ logoComponent: m.default });
    });
  }

  render() {
    const Logo = this.state.logoComponent;
    return (
      <div className="crypto-logo-container">
        <Logo className="crypto-logo" />
      </div>
    );
  }
}

export default CryptoIcon;
