import { awardData } from "./awardData";
import { Nominee, AwardDataFilter } from "./types";

export const searchAwardData = (filter: AwardDataFilter) => {
  if (filter.value === "") return [];
  const result: Nominee[] = Object.values(awardData).filter(
    (nominee: Nominee) =>
      Object.values(nominee)
        .filter(value => typeof value === "string")
        .map(value => {
          if (value.toLowerCase() === filter.value.toLowerCase())
            return value.toLowerCase();
        })
        .includes(filter.value.toLowerCase())
  );
  return result;
};
