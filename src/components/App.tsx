import React from "react";
import "../styles/App.css";

import awardData from "../lib/awardData";
import AwardList from "./AwardList";

const App = () => {
  const currList = "2018";
  return (
    <div className="App">
      <AwardList awardData={awardData[currList]} />
    </div>
  );
};

export default App;
