import React from "react";

type Props = {};

const SearchBar = (props: Props) => {
  const handleEnterDown = (e: any) => {
    if (e.key === "Enter") {
    }
  };
  return (
    <div className="header--search_bar_container">
      <input
        placeholder="Search"
        onKeyDown={handleEnterDown}
        className="header--search_input"
      ></input>
    </div>
  );
};

export default SearchBar;
