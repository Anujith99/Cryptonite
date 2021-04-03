import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "resources/cryptoniteLogo.svg";

import Dropdown from "./Dropdown";
import "./Navbar.scss";

class Navbar extends React.Component {
  state = {
    menuOpen: false,
    dropdownActive: false,
  };

  handleClick = () =>
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));

  closeMobileMenu = () => this.setState({ menuOpen: false });

  render() {
    return (
      <>
        <nav className="navbar container">
          <Link to="/" className="navbar-logo">
            <Logo />
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.menuOpen ? "fas fa-bars" : "fas fa-times"}
            />
          </div>
          <ul
            className={
              this.state.menuOpen ? "nav-menu mobile-menu" : "nav-menu"
            }
          >
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={this.closeMobileMenu}>
                FAQs
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={this.closeMobileMenu}>
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={this.closeMobileMenu}>
                Types <i className="fas fa-caret-down" />
              </Link>
              {this.state.dropdownActive ? <Dropdown /> : null}
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
