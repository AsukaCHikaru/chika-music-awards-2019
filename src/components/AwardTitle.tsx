import React from "react";

import { awardNameMap } from "../lib/constants";

type Props = {
  subFilter: string;
  subKeyword: string;
};

const AwardTitle = (props: Props) => {
  const titleTextContent =
    props.subFilter === "year"
      ? props.subKeyword
      : awardNameMap[props.subKeyword];
  return <h2>{titleTextContent}</h2>;
};

export default AwardTitle;
