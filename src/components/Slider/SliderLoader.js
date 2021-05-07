import React from "react";

const LoaderBox = () => {
  return <div className="slider-loader-box"></div>;
};

class SliderLoader extends React.Component {
  render() {
    return (
      <div className="slider-loader">
        <LoaderBox />
        <LoaderBox />
        <LoaderBox />
      </div>
    );
  }
}

export default SliderLoader;
