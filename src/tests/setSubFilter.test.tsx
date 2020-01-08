import { setSubFilter } from "../lib/setSubFilter";
import { AwardDataFilter } from "../lib/types";
import { createAwardDataFilter } from "../lib/createAwardDataFilter";

test("Input: category", () => {
  const filter: AwardDataFilter = createAwardDataFilter("category", "vocal");
  expect(setSubFilter(filter)).toBe("year");
});

test("Input: year", () => {
  const filter: AwardDataFilter = createAwardDataFilter("year", "2011");
  expect(setSubFilter(filter)).toBe("category");
});

test("Input: category", () => {
  const filter: AwardDataFilter = createAwardDataFilter("search", "baby");
  expect(setSubFilter(filter)).toBe("any");
});
