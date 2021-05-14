import React from "react";
import Slider from "../Slider/Slider";
import Modal from "../Modal/Modal";

import VideoModal from "./VideoModal/VideoModal";

import { NEWS_TYPES } from "helpers/constants";

class NewsSection extends React.Component {
  state = {
    showModal: false,
    selectedItem: null,
  };

  onDismiss = () => this.setState({ showModal: false, selectedItem: null });
  handleCardClick = (selectedItem) =>
    this.setState({ showModal: true, selectedItem });

  render() {
    return (
      <section id="news" className="section">
        <div className="container">
          {this.props.showHeader ? (
            <>
              <h3 className="section-header">
                Latest Articles, Videos and Podcasts
              </h3>
              <h6 className="section-paragraph">
                Stay up to date with the happenings in the cryptocurrency world.
              </h6>
            </>
          ) : null}
          {NEWS_TYPES.map((type, index) => (
            <Slider
              key={index}
              type={type}
              category={this.props.category}
              handleCardClick={this.handleCardClick}
            />
          ))}
        </div>
        <Modal show={this.state.showModal} onDismiss={this.onDismiss}>
          <VideoModal video={this.state.selectedItem} />
        </Modal>
      </section>
    );
  }
}

export default NewsSection;
