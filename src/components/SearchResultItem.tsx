import React from "react";

import { Nominee } from "../lib/types";
import { awardNameMap } from "../lib/constants";

type Props = {
  nominee: Nominee;
};

const SearchResultItem = (props: Props) => {
  return (
    <div className="search--result_item">
      <a
        href={`/year=${props.nominee.year}#${props.nominee.category}`}
        className="search--result_item_link"
      >
        <h5 className="search--result_item_type_header"></h5>
        <img
          className="search--result_item_img"
          alt={
            props.nominee.hasOwnProperty("songName")
              ? `${props.nominee.songName} - ${props.nominee.artist}`
              : props.nominee.artist
          }
          src={
            process.env.PUBLIC_URL + `/assets/${props.nominee.imgFileName}.jpg`
          }
        />
        <div className="search--result_item_header_container">
          <h5 className="search--result_item_type">
            {awardNameMap[props.nominee.category]}
          </h5>
          <h5 className="search--result_item_year">{props.nominee.year}</h5>
          <h5 className="search--result_item_main_header">
            {props.nominee.hasOwnProperty("songName")
              ? props.nominee.songName
              : props.nominee.artist}
          </h5>
          {props.nominee.hasOwnProperty("ft") ? (
            <h5 className="search--result_item_ft">{props.nominee.ft}</h5>
          ) : null}
          {props.nominee.hasOwnProperty("songName") ? (
            <h5 className="search--result_item_artist">
              {props.nominee.artist}
            </h5>
          ) : null}
        </div>
      </a>
    </div>
  );
};

export default SearchResultItem;
