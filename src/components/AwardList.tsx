import React from "react";
import Award from "./Award";
import { Nominee } from "../lib/types";

type Props = {
  awardData: Nominee[];
  subFilter: string;
};

const AwardList = (props: Props) => {
  const groupAwardData = () => {
    const groupResult: { [index: string]: Nominee[] } = {};
    props.awardData.forEach(nominee => {
      const key = nominee[props.subFilter];
      if (!groupResult.hasOwnProperty(key)) {
        groupResult[key] = [nominee];
      } else {
        groupResult[key].push(nominee);
      }
    });
    return groupResult;
  };

  const renderAwards = () => {
    const awardNodes = Object.entries(groupAwardData()).map(
      ([groupName, nominees], i) => {
        return (
          <Award
            groupName={groupName}
            groupType={props.subFilter}
            nomineeList={nominees}
            key={`${groupName}_nominee_${i}`}
          />
        );
      }
    );
    // Time desc, newewst year on the top
    if (props.subFilter === "year") awardNodes.reverse();
    return awardNodes;
  };

  return <div>{renderAwards()}</div>;
};

export default AwardList;
