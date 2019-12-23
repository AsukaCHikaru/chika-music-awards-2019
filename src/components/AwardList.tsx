import React from "react";

import Award from "./Award";

interface Props {
  awardData: object;
  setCurrList: object;
}

const AwardList = (props: Props) => {
  const renderAwardsInList = (awardData: object) => {
    return Object.entries(awardData).map(([awardName, nomineeList], i) => {
      return (
        <Award
          awardName={awardName}
          nomineeList={nomineeList}
          key={i}
          setCurrList={props.setCurrList}
        />
      );
    });
  };

  return <>{renderAwardsInList(props.awardData)}</>;
};

export default AwardList;
