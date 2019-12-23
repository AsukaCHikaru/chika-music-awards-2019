import React from "react";

import Award from "./Award";

interface Props {
  awardData: object;
  setCurrList: object;
  mainFilter: string;
  mainKeyword: string;
  subFilter: string;
}

const AwardList = (props: Props) => {
  const renderAwardsInList = (awardData: object) => {
    const awardsInList = Object.entries(awardData).map(
      ([subKeyword, nomineeList], i) => {
        return (
          <Award
            mainFilter={props.mainFilter}
            mainKeyword={props.mainKeyword}
            subFilter={props.subFilter}
            subKeyword={subKeyword}
            nomineeList={nomineeList}
            key={i}
            setCurrList={props.setCurrList}
          />
        );
      }
    );
    if (props.subFilter === "year") awardsInList.reverse();
    return awardsInList;
  };

  return <>{renderAwardsInList(props.awardData)}</>;
};

export default AwardList;
