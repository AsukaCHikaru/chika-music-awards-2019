import React from "react";

import { Nominee } from "../lib/types";

type Props = {
  nominee: Nominee;
};

const SearchResultItem = (props: Props) => {
  return (
    <div className="search--result_item">
      <h5 className="search--result_item_main_header">
        {props.nominee.hasOwnProperty("songName")
          ? props.nominee.songName
          : props.nominee.artist}
      </h5>
      {props.nominee.hasOwnProperty("ft") ? (
        <h6 className="search--result_item_ft">{props.nominee.ft}</h6>
      ) : null}
      {props.nominee.hasOwnProperty("songName") ? (
        <h6 className="search--result_item_artist">{props.nominee.artist}</h6>
      ) : null}
    </div>
  );
};

export default SearchResultItem;
