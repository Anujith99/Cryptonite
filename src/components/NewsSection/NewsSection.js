import React from "react";
import Slider from "../Slider/Slider";

import { NEWS_TYPES } from "helpers/constants";

class NewsSection extends React.Component {
  render() {
    return (
      <section className="section">
        <div className="container">
          <h3 className="section-header">
            Latest Articles, Videos and Podcasts
          </h3>
          <h6 className="section-paragraph">
            Stay up to date with the happenings in the cryptocurrency world.
          </h6>
          {NEWS_TYPES.map((type, index) => (
            <Slider key={index} type={type} category={this.props.category} />
          ))}
        </div>
      </section>
    );
  }
}

export default NewsSection;
