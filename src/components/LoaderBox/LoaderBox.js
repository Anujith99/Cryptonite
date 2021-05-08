import React from "react";

import "./LoaderBox.scss";

export const LoaderBox = ({ customClass }) => {
  return <div className={`loader-box ${customClass}`}></div>;
};
