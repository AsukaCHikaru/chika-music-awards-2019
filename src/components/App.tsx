import React, { useState } from "react";
import "../styles/App.css";

import Header from "./Header";
import AwardList from "./AwardList";
import { awardData } from "../lib/awardData";

const App = () => {
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
    console.log(caterizedData);
    return caterizedData;
  };

  return (
    <div className="App">
      <Header setCurrList={setCurrList} subFilter={currList.subFilter} />
      <AwardList
        awardData={filterCurrList()}
        mainFilter={currList.mainFilter}
        mainKeyword={currList.mainKeyword}
        subFilter={currList.subFilter}
        setCurrList={setCurrList}
      />
    </div>
  );
};

export default App;
