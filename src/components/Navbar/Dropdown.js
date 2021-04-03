import React from "react";
import { Link } from "react-router-dom";
import { CRYPTO_TYPES } from "helpers/constants";

class Dropdown extends React.Component {
  state = {
    menuActive: false,
  };

  render() {
    return (
      <>
        <ul
          onClick={this.handleClick}
          className={
            this.state.menuActive ? "dropdown-menu active" : "dropdown-menu"
          }
        >
          {CRYPTO_TYPES.map((item, index) => {
            return (
              <li key={index}>
                <Link
                  className="dropdown-link"
                  to={item.path}
                  onClick={() => this.setState({ menuActive: false })}
                >
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
