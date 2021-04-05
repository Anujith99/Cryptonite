import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import FAQs from "./FAQs/FAQs";
import NewsSection from "./NewsSection/NewsSection";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HeroSection />
        <FAQs />
        <NewsSection />
      </div>
    );
  }
}

export default HomePage;
