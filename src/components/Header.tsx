import React from "react";

import { awardNameMap, awardYears } from "../lib/constants";

type Props = {
  subFilter: string;
  setCurrList: any;
};
const Header = (props: Props) => {
  const renderSubFilterLinks = () => {
    const subKeywords =
      props.subFilter === "year" ? awardYears : Object.keys(awardNameMap);
    return subKeywords.map(subKeyword => {
      const linkTextContent =
        props.subFilter === "year" ? subKeyword : awardNameMap[subKeyword];
      return (
        <a
          href="/"
          onClick={(e: any) => {
            e.preventDefault();
            const newListState =
              props.subFilter === "year"
                ? {
                    mainFilter: props.subFilter,
                    subFilter: "category",
                    mainKeyword: e.target.textContent
                  }
                : {
                    mainFilter: props.subFilter,
                    subFilter: "year",
                    mainKeyword: Object.keys(awardNameMap).filter(
                      category =>
                        awardNameMap[category] === e.target.textContent
                    )[0]
                  };
            props.setCurrList(newListState);
          }}
        >
          {linkTextContent}
        </a>
      );
    });
  };
  return (
    <header className="header">
      <h1>CHIKA MUSIC AWARDS</h1>
      <div className="header--sub_filter_container">
        {renderSubFilterLinks()}
      </div>
    </header>
  );
};

export default Header;
