import { awardData } from "./awardData";
import { Nominee, AwardDataFilter } from "./types";

export const searchAwardData = (filter: AwardDataFilter): Nominee[] => {
  if (filter.value.length <= 2) return [];
  const result: Nominee[] = Object.values(awardData).filter(
    (nominee: Nominee) =>
      Object.entries(nominee)
        .filter(
          ([key, value]) =>
            (["category", "year"].includes(filter.type) &&
              filter.value === value) ||
            (filter.type === "search" &&
              ["songName", "ft", "artist"].includes(key))
        )
        .map(([, value]) => value.toString().toLowerCase())
        .filter(value => {
          const keywordCompareRegex = new RegExp(filter.value.toLowerCase());
          return keywordCompareRegex.exec(value) !== null;
        }).length !== 0
  );
  return result;
};
