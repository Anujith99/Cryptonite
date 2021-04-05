import React from "react";

import "./Accordion.scss";

const AccordionItem = ({ id, item, isSelected, toggleItem }) => {
  return (
    <div
      className={`accordion-item ${isSelected === id ? "open" : ""}`}
      onClick={() => toggleItem(id)}
    >
      <div className="accordion-item-header">
        {item.header}
        <div className="expand-icon"></div>
      </div>
      <div className="accordion-item-text">{item.text}</div>
    </div>
  );
};

class Accordion extends React.Component {
  state = {
    selectedItem: null,
  };

  toggleItem = (id) => {
    if (id === this.state.selectedItem) {
      this.setState({ selectedItem: null });
    } else {
      this.setState({ selectedItem: id });
    }
  };

  render() {
    const { items } = this.props;
    return (
      <div className="accordion">
        {items.map((item, index) => (
          <AccordionItem
            key={item.id}
            id={item.id}
            item={item}
            isSelected={this.state.selectedItem}
            toggleItem={this.toggleItem}
          />
        ))}
      </div>
    );
  }
}

export default Accordion;
