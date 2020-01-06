import React from "react";

import { awardNameMap, awardYears } from "../lib/constants";
import SearchBar from "./SearchBar";
import "../styles/Header.css";

type Props = {
  mainFilter: string;
  setCurrList: any;
};
const Header = (props: Props) => {
  const rendermainFilterLinks = () => {
    const subKeywords =
      props.mainFilter === "year" ? awardYears : Object.keys(awardNameMap);
    return subKeywords.map((subKeyword, i) => {
      const linkTextContent =
        props.mainFilter === "year" ? subKeyword : awardNameMap[subKeyword];
      return (
        <a
          href="/"
          key={i}
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
      <h1 className="header--site_title">CHIKA MUSIC AWARDS</h1>
      <div className="header--main_filter_container">
        {rendermainFilterLinks()}
      </div>
      <SearchBar setCurrList={props.setCurrList} />
    </header>
  );
};

export default Header;
