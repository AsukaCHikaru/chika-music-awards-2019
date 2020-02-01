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

  const renderCards = () => {
    const cardNodes: Nominee[] = [];
    props.nomineeList.forEach(nominee => {
      if (nominee.won) cardNodes.unshift(nominee);
      else cardNodes.push(nominee);
    });
    return cardNodes.map(nominee => {
      return <Card nominee={nominee} />;
    });
  };

  return (
    <div
      className="award--container"
      id={props.groupName}
      onClick={e => handleClickCategoryArchive(e)}
    >
      <div className="award--header">
        <AwardTitle groupType={props.groupType} groupName={props.groupName} />
        <ArchiveLink
          archiveType={props.groupType}
          groupName={props.groupName}
        />
      </div>
      {renderCards()}
    </div>
  );
};

export default AwardLayout;
