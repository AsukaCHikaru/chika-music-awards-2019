import React, { useEffect, useState } from "react";

import Header from "./Header";
import AwardList from "./AwardList";
import Footer from "./Footer";
import { searchAwardData } from "../lib/searchAwardData";
import { parseUrl } from "../lib/parseUrl";
import { setSubFilter } from "../lib/setSubFilter";
import { DEFAULT_APP_STATE } from "../lib/constants";

type Props = {
  path: string;
  location: {
    search: string;
  };
};

const UrlParser = (props: Props) => {
  const [appState, setAppState] = useState(DEFAULT_APP_STATE);
  // Update state after url changes
  useEffect(() => {
    if (props.location.search === "") setAppState(parseUrl("?year=2019"));
    else setAppState(parseUrl(props.location.search));
  }, [props.location.search]);
  return (
    <>
      <Header state={appState} />
      <AwardList
        subFilter={setSubFilter(appState)}
        awardData={searchAwardData(appState)}
      />
      <Footer></Footer>
    </>
  );
};

export default UrlParser;
