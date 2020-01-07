import { awardData } from "./awardData";
import { Nominee } from "./types";

export const searchAwardData = (keyword: string) => {
  if (keyword === "") return [];
  const result: Nominee[] = Object.values(awardData).filter(
    (nominee: Nominee) =>
      Object.values(nominee)
        .filter(value => typeof value === "string")
        .map(value => {
          if (value.toLowerCase() === keyword.toLowerCase())
            return value.toLowerCase();
        })
        .includes(keyword.toLowerCase())
  );
  return result;
};
