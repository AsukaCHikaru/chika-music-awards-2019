import { AwardDataFilter } from "./types";

const types: string[] = ["year", "category", "search"];

const invalidUrlResult: AwardDataFilter = {
  type: "error",
  value: "error"
};

export const parseUrl = (url: string) => {
  if (/\?.+=.+/.exec(url) === null) return invalidUrlResult;

  const type: string = url.replace(/\?(.*)=.*/, "$1");
  const value: string = url.replace(/\?.*=(.*)/, "$1");

  if (!types.includes(type)) return invalidUrlResult;

  const result: AwardDataFilter = {
    type,
    value
  };

  return result;
};
