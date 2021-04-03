import React from "react";
import Navbar from "components/Navbar/Navbar";
import HeroSection from "components/HeroSection/HeroSection";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <HeroSection />
      </div>
    );
  }
}

export default App;
