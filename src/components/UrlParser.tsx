import React, { useEffect, useState } from "react";

import Header from "./Header";
import AwardList from "./AwardList";
import { searchAwardData } from "../lib/searchAwardData";
import { parseUrl } from "../lib/parseUrl";
import { setSubFilter } from "../lib/setSubFilter";
import { DEFAULT_APP_STATE } from "../lib/constants";

type Props = {
  path: string;
  url: string;
};

const UrlParser = (props: Props) => {
  const [appState, setAppState] = useState(DEFAULT_APP_STATE);
  // Update state after url changes
  useEffect(() => {
    setAppState(parseUrl(props.url));
  }, [props.path, props.url]);
  return (
    <>
      <Header state={appState} />
      <AwardList
        subFilter={setSubFilter(appState)}
        awardData={searchAwardData(appState)}
      />
    </>
  );
};

export default UrlParser;
