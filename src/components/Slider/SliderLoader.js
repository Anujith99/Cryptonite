import React from "react";
import { LoaderBox } from "components/LoaderBox/LoaderBox";

class SliderLoader extends React.Component {
  render() {
    return (
      <div className="slider-loader">
        {[...Array(3)].map((item, index) => (
          <LoaderBox key={index} customClass="slider-loader-box" />
        ))}
      </div>
    );
  }
}

export default SliderLoader;
