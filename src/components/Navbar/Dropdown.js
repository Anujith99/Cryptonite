import React from "react";
import { Link } from "react-router-dom";
import { CRYPTO_TYPES } from "helpers/constants";

import "./Dropdown.scss";

class Dropdown extends React.Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    // this.setState({ clicked: true });
    this.props.closeMobileMenu();
  };

  render() {
    return (
      <>
        <ul
          onClick={this.handleClick}
          className={`dropdown-menu ${this.state.clicked ? "clicked" : ""}`}
        >
          {CRYPTO_TYPES.map((item, index) => {
            return (
              <li key={index}>
                <Link className="dropdown-link" to={item.path}>
                  {item.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default Dropdown;
