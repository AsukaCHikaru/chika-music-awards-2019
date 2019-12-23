import React, { useState } from "react";
import "../styles/App.css";

import { awardData } from "../lib/awardData";
import AwardList from "./AwardList";

const App = () => {
  const [currList, setCurrList] = useState({
    mainFilter: "year",
    value: "2018",
    subFilter: "category"
  });
  const filterCurrList = () => {
    const filteredList = awardData.filter(
      nominee =>
        nominee[currList.mainFilter].toLowerCase() ===
        currList.value.toLowerCase()
    );
    const caterizedData: { [index: string]: any } = {};
    Object.values(filteredList).forEach(nominee => {
      if (caterizedData.hasOwnProperty(nominee[currList.subFilter]))
        caterizedData[nominee[currList.subFilter]].push(nominee);
      else caterizedData[nominee[currList.subFilter]] = [nominee];
    });
    console.log(caterizedData);
    return caterizedData;
  };

  return (
    <div className="App">
      <AwardList
        awardData={filterCurrList()}
        mainFilter={currList.mainFilter}
        mainKeyword={currList.value}
        subFilter={currList.subFilter}
        setCurrList={setCurrList}
      />
    </div>
  );
};

export default App;
