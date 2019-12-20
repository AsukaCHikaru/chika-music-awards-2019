import React from "react";

import "../styles/Card.css";

type Nominee = {
  artist: string;
  songName?: string;
  imgFileName: string;
  ft?: string;
  won: boolean;
};

type Props = {
  nominee: Nominee;
};

const Card = (props: Props) => {
  return (
    <div className="card--container">
      <img
        className="card--img"
        src={
          process.env.PUBLIC_URL + `/assets/${props.nominee.imgFileName}.jpg`
        }
      />
      <div>
        <h3 className="card--mainHeader">
          {props.nominee.hasOwnProperty("songName")
            ? props.nominee.songName
            : props.nominee.artist}
        </h3>
        {props.nominee.hasOwnProperty("ft") ? (
          <h4 className="card--ft">{props.nominee.ft}</h4>
        ) : null}
        {props.nominee.hasOwnProperty("songName") ? (
          <h4 className="card--artist">{props.nominee.artist}</h4>
        ) : null}
      </div>
    </div>
  );
};

export default Card;
