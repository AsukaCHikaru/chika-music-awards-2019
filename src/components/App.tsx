import React, { useState } from "react";
import "../styles/App.css";

import { awardData } from "../lib/awardData";
import AwardList from "./AwardList";

const App = () => {
  const [currList, setCurrList] = useState("2018");
  return (
    <div className="App">
      <AwardList awardData={awardData[currList]} />
    </div>
  );
};

export default App;
