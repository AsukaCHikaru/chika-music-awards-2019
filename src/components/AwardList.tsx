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
    return Object.entries(groupAwardData()).map(([groupName, nominees], i) => {
      return (
        <Award
          groupName={groupName}
          groupType={props.subFilter}
          nomineeList={nominees}
          key={`${HTMLOptGroupElement}_nominee_${i}`}
        />
      );
    });
  };

  return <div>{renderAwards()}</div>;
};

export default AwardList;
