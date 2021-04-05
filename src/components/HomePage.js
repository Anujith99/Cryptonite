import React from "react";
import HeroSection from "./HeroSection/HeroSection";
import FAQs from "./FAQs/FAQs";
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <HeroSection />
        <FAQs />
      </div>
    );
  }
}

export default HomePage;
