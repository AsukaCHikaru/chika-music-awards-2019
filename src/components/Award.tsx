import React from "react";

import Card from "./Card";
import { Nominee } from "../lib/awardData";

interface Props {
  awardName: string;
  nomineeList: Nominee[];
}

const AwardLayout = (props: Props) => {
  return (
    <div className="awardlayout--container">
      <h2>{props.awardName}</h2>
      <Card nominee={props.nomineeList[0]} />
      <Card nominee={props.nomineeList[1]} />
      <Card nominee={props.nomineeList[2]} />
      <Card nominee={props.nomineeList[3]} />
      <Card nominee={props.nomineeList[4]} />
    </div>
  );
};

export default AwardLayout;
