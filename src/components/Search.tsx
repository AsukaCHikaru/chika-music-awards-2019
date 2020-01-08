import React, { useState } from "react";

import SearchBar from "./SearchBar";
import SearchResultItem from "./SearchResultItem";
import { searchAwardData } from "../lib/searchAwardData";
import { createAwardDataFilter } from "../lib/createAwardDataFilter";
import { SEARCH_MININUM_LENGTH } from "../lib/constants";
import { Nominee } from "../lib/types";

type Props = {};

const defaultSearchResult: Nominee[] = [];

const Search = (props: Props) => {
  const [searchResult, setSearchResult] = useState(defaultSearchResult);
  const handleSearchBarOnChange = (e: any) => {
    if (e.target.className === "search--input") {
      if (e.target.value.length > SEARCH_MININUM_LENGTH) {
        const searchFilter = createAwardDataFilter("any", e.target.value);
        const searchResult = searchAwardData(searchFilter);
        setSearchResult(searchResult);
      } else {
        setSearchResult(defaultSearchResult);
      }
    }
  };

  const renderSearchResultItems = () => {
    return searchResult.map((result, i) => {
      return (
        <SearchResultItem nominee={result} key={`search--result_item_${i}`} />
      );
    });
  };

  return (
    <div onKeyUp={handleSearchBarOnChange}>
      <SearchBar />
      <div>{renderSearchResultItems()}</div>
    </div>
  );
};

export default Search;
