import React from "react";

import Card from "./Card";
import ArchiveLink from "./ArchiveLink";
import AwardTitle from "./AwardTitle";
import { Nominee } from "../lib/types";

interface Props {
  nomineeList: Nominee[];
  setCurrList: any;
  mainFilter: string;
  mainKeyword: string;
  subFilter: string;
  subKeyword: string;
}

const AwardLayout = (props: Props) => {
  const handleClickCategoryArchive = (e: any) => {
    const eleClass = e.target.className;
    let newListState = null;
    // if (eleClass === "card--artist") {
    //   newListState = {
    //     mainFilter: "artist",
    //     value: e.target.textContent
    //   };
    // }
    if (eleClass === "award--archive_link") {
      window.scrollTo(0, 0);
      newListState = {
        mainFilter: props.subFilter,
        subFilter: props.mainFilter,
        mainKeyword: props.subKeyword
      };
    }

    if (newListState !== null) props.setCurrList(newListState);
  };

  return (
    <div
      className="awardlayout--container"
      onClick={e => handleClickCategoryArchive(e)}
    >
      <AwardTitle subFilter={props.subFilter} subKeyword={props.subKeyword} />
      <ArchiveLink
        archiveType={props.subFilter}
        subKeyword={props.subKeyword}
      />
      <Card nominee={props.nomineeList[0]} />
      <Card nominee={props.nomineeList[1]} />
      <Card nominee={props.nomineeList[2]} />
      <Card nominee={props.nomineeList[3]} />
      <Card nominee={props.nomineeList[4]} />
    </div>
  );
};

export default AwardLayout;
