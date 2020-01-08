import React from "react";
import { Link } from "@reach/router";

import { awardNameMap, awardYears } from "../lib/constants";
import { AwardDataFilter } from "../lib/types";
import Search from "./Search";
import "../styles/Header.css";

type Props = {
  state: AwardDataFilter;
};

const Header = (props: Props) => {
  const renderMainTypeLinks = () => {
    const mainTypeData =
      props.state.type === "category" ? Object.keys(awardNameMap) : awardYears;
    return mainTypeData.map((item, i) => {
      const linkTextContent =
        props.state.type === "category" ? awardNameMap[item] : item;
      return (
        <Link
          to={`/${props.state.type}=${item}`}
          key={`header--type_link_${item}`}
        >
          {linkTextContent}
        </Link>
      );
    });
  };

  return (
    <header className="header">
      <Link to="/" className="header--site_title">
        <h1 className="header--site_title">CHIKA MUSIC AWARDS</h1>
      </Link>
      <div className="header--main_filter_container">
        {renderMainTypeLinks()}
      </div>
      <Search />
    </header>
  );
};

export default Header;
