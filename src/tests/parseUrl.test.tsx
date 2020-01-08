import { parseUrl } from "../lib/parseUrl";

test("Valid url: category", () => {
  const url = "category=vocal";
  expect(parseUrl(url)).toEqual({
    type: "category",
    value: "vocal"
  });
});

test("Valid url: year", () => {
  const url = "year=2018";
  expect(parseUrl(url)).toEqual({
    type: "year",
    value: "2018"
  });
});

test("Valid url: search", () => {
  const url = "search=rise";
  expect(parseUrl(url)).toEqual({
    type: "search",
    value: "rise"
  });
});

test("Invalid url: no = ", () => {
  const url = "categoryvocal";
  expect(parseUrl(url)).toEqual({
    type: "error",
    value: "error"
  });
});

test("Invalid url: no =", () => {
  const url = "12345678";
  expect(parseUrl(url)).toEqual({
    type: "error",
    value: "error"
  });
});

test("Invalid url: no =", () => {
  const url = "あいうえお";
  expect(parseUrl(url)).toEqual({
    type: "error",
    value: "error"
  });
});

test("Invalid url: wrong type", () => {
  const url = "??=vocal";
  expect(parseUrl(url)).toEqual({
    type: "error",
    value: "error"
  });
});

test("Invalid url: misspelled type", () => {
  const url = "yaer=2018";
  expect(parseUrl(url)).toEqual({
    type: "error",
    value: "error"
  });
});

test("Invalid url: no type", () => {
  const url = "=2018";
  expect(parseUrl(url)).toEqual({
    type: "error",
    value: "error"
  });
});

test("Invalid url: no value", () => {
  const url = "year=";
  expect(parseUrl(url)).toEqual({
    type: "error",
    value: "error"
  });
});

test("Invalid url: only =", () => {
  const url = "=";
  expect(parseUrl(url)).toEqual({
    type: "error",
    value: "error"
  });
});
