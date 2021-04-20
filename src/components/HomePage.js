import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import FAQs from "./FAQs/FAQs";
import NewsSection from "./NewsSection/NewsSection";
import CryptoSection from "./CryptoSection/CryptoSection";

import { CRYPTOCURRENCY } from "helpers/constants";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HeroSection />
        <FAQs />
        <NewsSection category={CRYPTOCURRENCY} />
        <CryptoSection />
      </div>
    );
  }
}

export default HomePage;
