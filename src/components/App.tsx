import React from "react";
import "../styles/App.css";
import UrlParser from "./UrlParser";

import { Router, Redirect } from "@reach/router";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="App">
      <Router>
        <Redirect from="/" to="/year=2018" noThrow />
        <UrlParser path=":url" url="default-url" />
      </Router>
    </div>
  );
};

export default App;
