import React from "react";
import Accordion from "./Accordion";

import { QUESTIONS } from "./Questions";

class FAQs extends React.Component {
  render() {
    return (
      <section id="faqs" className="section">
        <div className="container">
          <h3 className="section-header">Frequently Asked Questions</h3>
          <Accordion items={QUESTIONS} />
        </div>
      </section>
    );
  }
}

export default FAQs;
