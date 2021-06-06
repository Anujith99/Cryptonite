import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Vector } from "resources/404.svg";

import "./PageNotFound.scss";

class PageNotFound extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="not-found-section">
            <div className="not-found-text">
              <h1>OOPS!</h1>
              <p>This page could not be found</p>
              <Link className="not-found-link" to="/">
                <i className="fas fa-arrow-left" /> Go to home page
              </Link>
            </div>
            <div className="not-found-image">
              <Vector width="100%" height="100%" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PageNotFound;
