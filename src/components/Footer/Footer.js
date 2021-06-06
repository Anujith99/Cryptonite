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
          <div className="footer-links">
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
          <div className="footer-info">
            <h6>© Cryptonite Inc.</h6>
            <h5>
              Developed and Designed by
              <a
                href="https://github.com/Anujith99"
                target="_blank"
                rel="noreferrer"
                className="footer-github-link"
              >
                <i className="fab fa-github" /> Anujith
              </a>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
