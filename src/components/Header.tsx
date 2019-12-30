import React from "react";

import { awardNameMap, awardYears } from "../lib/constants";

type Props = {
  mainFilter: string;
  setCurrList: any;
};
const Header = (props: Props) => {
  const rendermainFilterLinks = () => {
    const subKeywords =
      props.mainFilter === "year" ? awardYears : Object.keys(awardNameMap);
    return subKeywords.map(subKeyword => {
      const linkTextContent =
        props.mainFilter === "year" ? subKeyword : awardNameMap[subKeyword];
      return (
        <a
          href="/"
          onClick={(e: any) => {
            e.preventDefault();
            const newListState =
              props.mainFilter === "year"
                ? {
                    mainFilter: props.mainFilter,
                    subFilter: "category",
                    mainKeyword: e.target.textContent
                  }
                : {
                    mainFilter: props.mainFilter,
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
        {rendermainFilterLinks()}
      </div>
    </header>
  );
};

export default Header;
