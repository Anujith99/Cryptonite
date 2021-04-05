import React from "react";
import Navbar from "components/Navbar/Navbar";
import HomePage from "components/HomePage";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <HomePage />
      </div>
    );
  }
}

export default App;
