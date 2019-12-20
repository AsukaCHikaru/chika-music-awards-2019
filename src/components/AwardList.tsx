import React from "react";

import Award from "./Award";

interface Props {
  awardData: object;
}

const AwardList = (props: Props) => {
  const renderAwardsInList = (awardData: object) => {
    return Object.entries(awardData).map(([awardName, nomineeList], i) => {
      return <Award awardName={awardName} nomineeList={nomineeList} key={i} />;
    });
  };

  return <>{renderAwardsInList(props.awardData)}</>;
};

export default AwardList;
