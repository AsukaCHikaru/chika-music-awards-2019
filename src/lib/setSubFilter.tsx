import { AwardDataFilter } from "./types";

export const setSubFilter = (filter: AwardDataFilter): string => {
  switch (filter.type) {
    case "year":
      return "category";
    case "category":
      return "year";
    default:
      return "any";
  }
};
