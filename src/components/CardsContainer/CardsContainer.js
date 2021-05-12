import React from "react";

import "./CardsContainer.scss";

export class Card extends React.Component {
  render() {
    return <div className="card">{this.props.children}</div>;
  }
}

class CardsContainer extends React.Component {
  render() {
    return <div className="cards-container">{this.props.children}</div>;
  }
}

export default CardsContainer;
