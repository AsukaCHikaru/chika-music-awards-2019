import React, { useState, useEffect } from "react";

import "../styles/search.css";
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
      if (e.target.value.length > SEARCH_MININUM_LENGTH) {
        setSearchKeyword(e.target.value);
      } else {
        setSearchResult(defaultSearchResult);
      }
    }
  };
  useEffect(() => {
    const searchFilter = createAwardDataFilter("any", searchKeyword);
    const searchResult = searchAwardData(searchFilter);
    setSearchResult(searchResult);
  }, [searchKeyword]);

  const renderSearchResultItems = () => {
    return searchResult.map((result, i) => {
      return (
        <a
          href={`/year=${result.year}#${result.category}`}
          key={`search--result_item_${i}`}
        >
          <SearchResultItem nominee={result} />
        </a>
      );
    });
  };

  const handleClickSearchResultItem = (e: any) => {
    if (e.currentTarget.className === "search--result_item_container") {
      setSearchKeyword("");
    }
  };

  return (
    <div onKeyUp={handleSearchBarOnChange}>
      <SearchBar />
      <div
        className="search--result_item_container"
        onClick={handleClickSearchResultItem}
      >
        {renderSearchResultItems()}
      </div>
    </div>
  );
};

export default Search;
