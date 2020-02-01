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
    return mainTypeData.map(item => {
      const linkTextContent =
        props.state.type === "category" ? awardNameMap[item] : item;
      return (
        <div
          className="header--type_link_wrapper"
          key={`header--type_link_${item}`}
        >
          <Link
            to={`/${props.state.type}=${item}`}
            className="header--type_link"
            dangerouslySetInnerHTML={{
              __html: linkTextContent.replace(/\s/g, "<br>")
            }}
          ></Link>
        </div>
      );
    });
  };

  return (
    <header className="header">
      <h1 className="header--site_title">
        <Link to="/" className="header--site_title">
          CHIKA MUSIC AWARDS
        </Link>
      </h1>
      <div className="header--main_filter_container">
        {renderMainTypeLinks()}
      </div>
      <Search />
    </header>
  );
};

export default Header;
