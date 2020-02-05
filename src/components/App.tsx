import React from "react";
import "../styles/App.css";
import UrlParser from "./UrlParser";

import { Router } from "@reach/router";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="App">
      <Router>
        <UrlParser path="/" location={{ search: "default-loc" }} />
      </Router>
    </div>
  );
};

export default App;
