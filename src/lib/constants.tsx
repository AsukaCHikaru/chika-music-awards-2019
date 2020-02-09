import { AwardDataFilter } from "./types";

export const awardNameMap: { [index: string]: string } = {
  vocal: "BEST VOCAL PERFORMANCE",
  lyrics: "BEST LYRICS",
  accompaniment: "BEST ACCOMPANIMENT",
  composition: "BEST COMPOSITION",
  video: "BEST MUSIC VIDEO",
  newArtist: "BEST NEW ARTIST",
  artist: "BEST ARTIST",
  record: "BEST RECORD"
};

export const awardYears: string[] = [
  "2009",
  "2010",
  "2011",
  "2012",
  "2017",
  "2018",
  "2019"
];

export const SEARCH_MININUM_LENGTH: number = 2;

export const DEFAULT_APP_STATE: AwardDataFilter = {
  type: "year",
  value: "2019"
};
