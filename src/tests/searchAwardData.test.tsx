import { searchAwardData } from "../lib/searchAwardData";

test("Single result: exact match", () => {
  expect(searchAwardData("Baby")).toEqual([
    {
      year: "2018",
      category: "vocal",
      songName: "Baby",
      artist: "Clean Bandit",
      ft: "(feat. Marina & Luis Fonsi)",
      imgFileName: "baby",
      won: false
    }
  ]);
});

test("Single result: case insensitive", () => {
  expect(searchAwardData("cOMe oVER")).toEqual([
    {
      year: "2017",
      category: "music",
      songName: "Come Over",
      artist: "Clean Bandit",
      ft: "(feat. Stylo G)",
      imgFileName: "comeOver",
      won: false
    }
  ]);
});

test("Multi results: exact match", () => {
  expect(searchAwardData("Octavo Dia")).toEqual([
    {
      year: "2018",
      category: "arrangement",
      songName: "Octavo Dia",
      artist: "Shakira",
      ft: "",
      imgFileName: "octavoDia",
      won: false
    },
    {
      year: "2018",
      category: "music",
      songName: "Octavo Dia",
      artist: "Shakira",
      ft: "",
      imgFileName: "octavoDia",
      won: true
    },
    {
      year: "2018",
      category: "record",
      songName: "Octavo Dia",
      artist: "Shakira",
      ft: "",
      imgFileName: "octavoDia",
      won: false
    }
  ]);
});

test("Multi results: case insensitive", () => {
  expect(searchAwardData("all THE sTaRS")).toEqual([
    {
      year: "2018",
      category: "vocal",
      songName: "All The Stars",
      artist: "Kendrick Lamar, SZA",
      ft: "",
      imgFileName: "allTheStars",
      won: false
    },
    {
      year: "2018",
      category: "lyrics",
      songName: "All The Stars",
      artist: "Kendrick Lamar, SZA",
      ft: "",
      imgFileName: "allTheStars",
      won: true
    },
    {
      year: "2018",
      category: "arrangement",
      songName: "All The Stars",
      artist: "Kendrick Lamar, SZA",
      ft: "",
      imgFileName: "allTheStars",
      won: true
    },
    {
      year: "2018",
      category: "video",
      songName: "All The Stars",
      artist: "Kendrick Lamar, SZA",
      ft: "",
      imgFileName: "allTheStars",
      won: false
    },
    {
      year: "2018",
      category: "record",
      songName: "All The Stars",
      artist: "Kendrick Lamar, SZA",
      ft: "",
      imgFileName: "allTheStars",
      won: true
    }
  ]);
});

test("No result: wrong keyword", () => {
  expect(searchAwardData("123456789XXX")).toEqual([]);
});

test("No result: empty keyword", () => {
  expect(searchAwardData("")).toEqual([]);
});
