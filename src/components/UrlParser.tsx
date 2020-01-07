import React, { useEffect, useState } from "react";
import { Router, Redirect } from "@reach/router";

import Header from "./Header";
import AwardList from "./AwardList";
import { awardData } from "../lib/awardData";
import { searchAwardData } from "../lib/searchAwardData";
import { parseUrl } from "../lib/parseUrl";
import { urlParseResult } from "../lib/types";

const defaultState: urlParseResult = {
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
  }, [props.path]);
  // do things after state changes
  useEffect(() => {}, [state]);
  return (
    <>
      <Header />
      <AwardList />
    </>
  );
};

export default UrlParser;
