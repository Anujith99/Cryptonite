import React from "react";
import Slider from "../Slider/Slider";

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
          <Slider type="Articles" />
        </div>
      </section>
    );
  }
}

export default NewsSection;
