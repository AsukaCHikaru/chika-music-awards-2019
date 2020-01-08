import React from "react";

import Card from "./Card";
import ArchiveLink from "./ArchiveLink";
import AwardTitle from "./AwardTitle";
import { Nominee } from "../lib/types";

interface Props {
  nomineeList: Nominee[];
  groupName: string;
  groupType: string;
}

const AwardLayout = (props: Props) => {
  const handleClickCategoryArchive = (e: any) => {
    const eleClass = e.target.className;
    if (eleClass === "award--archive_link") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <div
      className="awardlayout--container"
      id={props.groupName}
      onClick={e => handleClickCategoryArchive(e)}
    >
      <AwardTitle groupType={props.groupType} groupName={props.groupName} />
      <ArchiveLink archiveType={props.groupType} groupName={props.groupName} />
      <Card nominee={props.nomineeList[0]} />
      <Card nominee={props.nomineeList[1]} />
      <Card nominee={props.nomineeList[2]} />
      <Card nominee={props.nomineeList[3]} />
      <Card nominee={props.nomineeList[4]} />
    </div>
  );
};

export default AwardLayout;
