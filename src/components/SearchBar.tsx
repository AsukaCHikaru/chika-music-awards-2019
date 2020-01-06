import React from "react";

type Props = {
  setCurrList: any;
};

const SearchBar = (props: Props) => {
  const handleEnterDown = (e: any) => {
    if (e.key === "Enter") {
      props.setCurrList({
        mainFilter: "year",
        subFilter: "category",
        mainKeyword: e.target.value
      });
    }
  };
  return (
    <div className="header--search_bar_container">
      <input placeholder="Search" onKeyDown={handleEnterDown}></input>
    </div>
  );
};

export default SearchBar;
