import React, { useState, useEffect } from "react";

import "../styles/Search.css";
import SearchBar from "./SearchBar";
import SearchResultItem from "./SearchResultItem";
import { searchAwardData } from "../lib/searchAwardData";
import { createAwardDataFilter } from "../lib/createAwardDataFilter";
import { SEARCH_MININUM_LENGTH } from "../lib/constants";
import { Nominee } from "../lib/types";

type Props = {};

const defaultSearchResult: Nominee[] = [];

const Search = (props: Props) => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchResult, setSearchResult] = useState(defaultSearchResult);

  const handleSearchBarOnChange = (e: any) => {
    if (e.target.className === "header--search_input") {
      setSearchKeyword(e.target.value);
      if (e.target.value.length > SEARCH_MININUM_LENGTH) {
      } else {
        setSearchResult(defaultSearchResult);
      }
    }
  };
  useEffect(() => {
    const searchFilter = createAwardDataFilter("search", searchKeyword);
    const searchResult = searchAwardData(searchFilter);
    setSearchResult(searchResult);
  }, [searchKeyword]);

  const renderSearchResultItems = () => {
    return searchResult.map((result, i) => {
      return (
        <SearchResultItem nominee={result} key={`search_result_item_${i}`} />
      );
    });
  };

  const handleClickSearchResultItem = (e: any) => {
    if (e.currentTarget.className === "search--result_item_container") {
      setSearchKeyword("");
    }
  };

  const renderrenerSearchDiv = () => {
    return searchResult.length === 0 ? null : (
      <div
        className="search--result_item_container"
        onClick={handleClickSearchResultItem}
      >
        {renderSearchResultItems()}
      </div>
    );
  };

  return (
    <div onKeyUp={handleSearchBarOnChange} className="search">
      <SearchBar />
      {renderrenerSearchDiv()}
    </div>
  );
};

export default Search;
