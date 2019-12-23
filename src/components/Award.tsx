import React from "react";

import Card from "./Card";
import { Nominee } from "../lib/awardData";
import { awardNameMap } from "../lib/constants";

interface Props {
  awardName: string;
  nomineeList: Nominee[];
  setCurrList: object;
}

const AwardLayout = (props: Props) => {
  const handleClickCategoryArchive = (e: any) => {
    console.log(e.target.className);
  };

  return (
    <div
      className="awardlayout--container"
      onClick={e => handleClickCategoryArchive(e)}
    >
      <h2>{awardNameMap[props.awardName]}</h2>
      <Card nominee={props.nomineeList[0]} />
      <Card nominee={props.nomineeList[1]} />
      <Card nominee={props.nomineeList[2]} />
      <Card nominee={props.nomineeList[3]} />
      <Card nominee={props.nomineeList[4]} />
    </div>
  );
};

export default AwardLayout;
