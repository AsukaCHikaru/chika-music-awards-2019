import React from "react";

import "../styles/Card.css";
import { Nominee } from "../lib/types";

type Props = {
  nominee: Nominee;
};

const Card = (props: Props) => {
  return (
    <div
      className={props.nominee.won ? "card--container" : "card--container won"}
    >
      <img
        className="card--img"
        alt={
          props.nominee.hasOwnProperty("songName")
            ? `${props.nominee.songName} - ${props.nominee.artist}`
            : props.nominee.artist
        }
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
