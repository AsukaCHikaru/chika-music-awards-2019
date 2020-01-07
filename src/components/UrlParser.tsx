import React, { useEffect, useState } from "react";

import Header from "./Header";
import AwardList from "./AwardList";
import { searchAwardData } from "../lib/searchAwardData";
import { parseUrl } from "../lib/parseUrl";
import { setSubFilter } from "../lib/setSubFilter";
import { AwardDataFilter } from "../lib/types";

const defaultState: AwardDataFilter = {
  type: "year",
  value: "2018"
};

type Props = {
  path: string;
  url: string;
};

const UrlParser = (props: Props) => {
  const [state, setState] = useState(defaultState);
  // Update state after url changes
  useEffect(() => {
    setState(parseUrl(props.url));
  }, [props.path, props.url]);
  return (
    <>
      <Header state={state} />
      <AwardList
        subFilter={setSubFilter(state)}
        awardData={searchAwardData(state)}
      />
    </>
  );
};

export default UrlParser;
