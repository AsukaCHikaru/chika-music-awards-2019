import { AwardDataFilter } from "./types";

export const createAwardDataFilter = (
  type: string,
  value: string
): AwardDataFilter => {
  const filter: AwardDataFilter = {
    type,
    value
  };
  return filter;
};
