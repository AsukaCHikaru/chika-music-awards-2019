import React, { useState } from "react";
import "../styles/App.css";
import UrlParser from "./UrlParser";

import { awardData } from "../lib/awardData";
import { Router, Redirect } from "@reach/router";

type Props = {};

const App = (props: Props) => {
  const [currList, setCurrList] = useState({
    mainFilter: "year",
    mainKeyword: "2018",
    subFilter: "category"
  });
  const filterCurrList = () => {
    const filteredList = awardData.filter(
      nominee =>
        nominee[currList.mainFilter].toLowerCase() ===
        currList.mainKeyword.toLowerCase()
    );
    const caterizedData: { [index: string]: any } = {};
    Object.values(filteredList).forEach(nominee => {
      if (caterizedData.hasOwnProperty(nominee[currList.subFilter]))
        caterizedData[nominee[currList.subFilter]].push(nominee);
      else caterizedData[nominee[currList.subFilter]] = [nominee];
    });
    return caterizedData;
  };

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
