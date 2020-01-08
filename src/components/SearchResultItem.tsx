import React from "react";

import { Nominee } from "../lib/types";

type Props = {
  nominee: Nominee;
};

const SearchResultItem = (props: Props) => {
  return (
    <div>
      <h5>
        {props.nominee.hasOwnProperty("songName")
          ? props.nominee.songName
          : props.nominee.artist}
      </h5>
      {props.nominee.hasOwnProperty("ft") ? <h6>{props.nominee.ft}</h6> : null}
      {props.nominee.hasOwnProperty("songName") ? (
        <h6>{props.nominee.artist}</h6>
      ) : null}
    </div>
  );
};

export default SearchResultItem;
