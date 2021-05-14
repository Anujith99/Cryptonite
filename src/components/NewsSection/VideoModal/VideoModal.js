import React from "react";

import "./VideoModal.scss";

class VideoModal extends React.Component {
  render() {
    const { video } = this.props;
    if (!video) return null;
    const videoSrc = `https://youtube.com/embed/${video.id}`;
    return (
      <div className="video-modal">
        <iframe
          src={videoSrc}
          title={video.title}
          className="modal-iframe"
          allowFullScreen
        />
      </div>
    );
  }
}

export default VideoModal;
