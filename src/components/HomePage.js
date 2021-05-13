import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import FAQs from "./FAQs/FAQs";
import NewsSection from "./NewsSection/NewsSection";
import CryptoSection from "./CryptoSection/CryptoSection";

import ScrollToTopOnMount from "./ScrollToTopOnMount";

import { CRYPTOCURRENCY } from "helpers/constants";

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <ScrollToTopOnMount />
        <HeroSection />
        <FAQs />
        <NewsSection category={CRYPTOCURRENCY} showHeader={true} />
        <CryptoSection />
      </div>
    );
  }
}

export default HomePage;
