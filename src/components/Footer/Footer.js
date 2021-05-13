import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { ReactComponent as Logo } from "resources/cryptoniteLogo.svg";

import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer-section">
        <div className="container">
          <div className="footer-line" />
          <div className="footer">
            <Link to="/" className="footer-logo">
              <Logo />
            </Link>
            <HashLink smooth to="/#faqs" className="footer-link">
              FAQs
            </HashLink>
            <HashLink smooth to="/#news" className="footer-link">
              News
            </HashLink>
            <HashLink smooth to="/#cryptocurrencies" className="footer-link">
              Crypto Types
            </HashLink>
          </div>
          <h6>© Cryptonite Inc.</h6>
        </div>
      </div>
    );
  }
}

export default Footer;
