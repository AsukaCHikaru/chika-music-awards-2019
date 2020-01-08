import React, { useState, useEffect } from "react";

import SearchBar from "./SearchBar";
import { searchAwardData } from "../lib/searchAwardData";
import { createAwardDataFilter } from "../lib/createAwardDataFilter";

type Props = {};

const Search = (props: Props) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const handleSearchBarOnChange = (e: any) => {
    if (e.target.className === "search--input" && e.target.value.length > 2) {
      const searchBar = e.target;
      setSearchKeyword(searchBar.value);
    }
  };

  useEffect(() => {
    const dataFilter = createAwardDataFilter("any", searchKeyword);

    const searchResult = searchAwardData(dataFilter);
    console.log(searchResult);
  }, [searchKeyword]);

  return (
    <div onKeyUp={handleSearchBarOnChange}>
      <SearchBar />
    </div>
  );
};

export default Search;
