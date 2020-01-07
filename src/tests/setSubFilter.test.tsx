import { setSubFilter } from "../lib/setSubFilter";
import { AwardDataFilter } from "../lib/types";

const awardDataFilterCreator = (
  type: string,
  value: string
): AwardDataFilter => {
  const filter: AwardDataFilter = {
    type,
    value
  };
  return filter;
};

test("Input: category", () => {
  const filter: AwardDataFilter = awardDataFilterCreator("category", "vocal");
  expect(setSubFilter(filter)).toBe("year");
});

test("Input: year", () => {
  const filter: AwardDataFilter = awardDataFilterCreator("year", "2011");
  expect(setSubFilter(filter)).toBe("category");
});

test("Input: category", () => {
  const filter: AwardDataFilter = awardDataFilterCreator("search", "baby");
  expect(setSubFilter(filter)).toBe("any");
});
