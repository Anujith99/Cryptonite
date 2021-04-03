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

  onMouseEnter = () => {
    if (window.innerWidth > 770) {
      this.setState({ dropdownActive: true });
    }
  };

  onMouseExit = () => {
    if (window.innerWidth > 770) {
      this.setState({ dropdownActive: false });
    }
  };

  //FOR MOBILE MENU
  handleClick = () =>
    this.setState((prevState) => ({ menuOpen: !prevState.menuOpen }));

  closeMobileMenu = () => {
    this.setState({ menuOpen: false });
  };

  toggleDropdown = () =>
    this.setState((prevState) => ({
      dropdownActive: !prevState.dropdownActive,
    }));

  componentDidUpdate(prevProps, prevState) {
    if (prevState.menuOpen !== this.state.menuOpen && !this.state.menuOpen) {
      this.setState({ dropdownActive: false });
    }
  }

  render() {
    return (
      <>
        <nav className="navbar container">
          <Link to="/" className="navbar-logo" onClick={this.closeMobileMenu}>
            <Logo />
          </Link>
          <div className="menu-icon" onClick={this.handleClick}>
            <i
              className={this.state.menuOpen ? "fas fa-times" : "fas fa-bars"}
            />
          </div>
          <ul className={this.state.menuOpen ? "nav-menu active" : "nav-menu"}>
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
            <li
              className="nav-item"
              onMouseEnter={this.onMouseEnter}
              onMouseLeave={this.onMouseExit}
              onClick={this.toggleDropdown}
            >
              <div
                className={`nav-link dropdown ${
                  this.state.dropdownActive ? "active" : ""
                }`}
              >
                Types <i className="fas fa-caret-down" />
              </div>
              {this.state.dropdownActive ? (
                <Dropdown closeMobileMenu={this.closeMobileMenu} />
              ) : null}
            </li>
          </ul>
        </nav>
      </>
    );
  }
}

export default Navbar;
