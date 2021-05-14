import React from "react";
import { createPortal } from "react-dom";

import "./Modal.scss";

class Modal extends React.Component {
  render() {
    const { show, onDismiss } = this.props;
    return createPortal(
      <div
        onClick={onDismiss}
        className={`modal-wrapper ${show ? "active" : ""}`}
      >
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          {this.props.children}
        </div>
      </div>,
      document.querySelector("#modal")
    );
  }
}

export default Modal;
