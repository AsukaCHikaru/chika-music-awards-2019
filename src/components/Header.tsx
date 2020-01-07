import React from "react";

import { awardNameMap, awardYears } from "../lib/constants";
import SearchBar from "./SearchBar";
import "../styles/Header.css";

type Props = {
  mainFilter?: string;
  setCurrList?: any;
};
const Header = (props: Props) => {
  const rendermainFilterLinks = () => {};
  return (
    <header className="header">
      <h1 className="header--site_title">CHIKA MUSIC AWARDS</h1>
      <div className="header--main_filter_container">
        {/* {rendermainFilterLinks()} */}
      </div>
      <SearchBar setCurrList={props.setCurrList} />
    </header>
  );
};

export default Header;
