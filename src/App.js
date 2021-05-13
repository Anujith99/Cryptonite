import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import CryptoPage from "components/CryptoPage";
import HomePage from "components/HomePage";
import Footer from "components/Footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/:crypto"
            render={(props) => (
              <CryptoPage key={props.match.params.crypto} {...props} />
            )}
          />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
