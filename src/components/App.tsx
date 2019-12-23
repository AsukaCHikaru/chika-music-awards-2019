import React, { useState } from "react";
import "../styles/App.css";

import { awardData } from "../lib/awardData";
import AwardList from "./AwardList";

const App = () => {
  const [currList, setCurrList] = useState({
    mainKey: "year",
    value: "2018",
    subKey: "category"
  });
  const filterCurrList = () => {
    const filteredList = awardData.filter(
      nominee =>
        nominee[currList.mainKey].toLowerCase() === currList.value.toLowerCase()
    );
    const caterizedData: { [index: string]: any } = {};
    Object.values(filteredList).forEach(nominee => {
      if (caterizedData.hasOwnProperty(nominee[currList.subKey]))
        caterizedData[nominee[currList.subKey]].push(nominee);
      else caterizedData[nominee[currList.subKey]] = [nominee];
    });
    return caterizedData;
  };

  return (
    <div className="App">
      {<AwardList awardData={filterCurrList()} setCurrList={setCurrList} />}
    </div>
  );
};

export default App;
