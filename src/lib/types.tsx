export type AwardData = {
  [index: string]: any;
};

export type Nominee = {
  [index: string]: any;
  year: string;
  category: string;
  artist: string;
  imgFileName: string;
  won: boolean;
  songName?: string;
  ft?: string;
};

export type List = {
  mainFilter: string;
  subFilter: string;
  mainKeyword: string;
};

export type AwardDataFilter = {
  type: string;
  value: string;
};
