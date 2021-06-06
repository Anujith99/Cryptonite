import React from "react";
import { Switch, Route } from "react-router-dom";
import Navbar from "components/Navbar/Navbar";
import CryptoPage from "components/CryptoPage";
import HomePage from "components/HomePage";
import PageNotFound from "components/PageNotFound/PageNotFound";
import Footer from "components/Footer/Footer";

import { CRYPTO_TYPES } from "helpers/constants";

//If the path does not match any of the cryptocurrency types
//then it will be redirected to not found page
const PATH_REGEX = CRYPTO_TYPES.map((crypto) => crypto.id).join("|");

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path={`/:crypto(${PATH_REGEX})`}
            render={(props) => (
              <CryptoPage key={props.match.params.crypto} {...props} />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
