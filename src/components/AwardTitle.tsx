import React from "react";

import { awardNameMap } from "../lib/constants";

type Props = {
  groupType: string;
  groupName: string;
};

const AwardTitle = (props: Props) => {
  const titleTextContent =
    props.groupType === "year"
      ? props.groupName
      : awardNameMap[props.groupName];
  return <h2 className="award--title">{titleTextContent}</h2>;
};

export default AwardTitle;
