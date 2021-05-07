import React from "react";

import "./ErrorMessage.scss";

class ErrorMessage extends React.Component {
  render() {
    return (
      <div className="error-container">
        <i className="far fa-frown"></i>
        <h2 className="error-message">
          Oops! Something went wrong. Please try again.
        </h2>
      </div>
    );
  }
}

export default ErrorMessage;
