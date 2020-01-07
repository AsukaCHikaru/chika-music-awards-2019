import { searchAwardData } from "../lib/searchAwardData";
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

test("Single result: exact match", () => {
  const filter: AwardDataFilter = awardDataFilterCreator("any", "Baby");
  expect(searchAwardData(filter)).toEqual([
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
  const filter: AwardDataFilter = awardDataFilterCreator("any", "cOmE oVEr");
  expect(searchAwardData(filter)).toEqual([
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
  const filter: AwardDataFilter = awardDataFilterCreator("any", "Octavo Dia");
  expect(searchAwardData(filter)).toEqual([
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
  const filter: AwardDataFilter = awardDataFilterCreator(
    "any",
    "all The sTArS"
  );
  expect(searchAwardData(filter)).toEqual([
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
  const filter: AwardDataFilter = awardDataFilterCreator("any", "1234567890XX");
  expect(searchAwardData(filter)).toEqual([]);
});

test("No result: empty keyword", () => {
  const filter: AwardDataFilter = awardDataFilterCreator("any", "");
  expect(searchAwardData(filter)).toEqual([]);
});

test("Multi result: valid type search: year", () => {
  const filter: AwardDataFilter = awardDataFilterCreator("year", "2009");
  expect(searchAwardData(filter)).toEqual([
    {
      year: "2009",
      category: "music",
      songName: "Heavy Starry Chain",
      artist: "Tommy heavenly6",
      ft: "",
      imgFileName: "gothicMeltingIcecreamDarknessNightmare",
      won: true
    },
    {
      year: "2009",
      category: "music",
      songName: "I♡Xmas",
      artist: "Tommy heavenly6",
      ft: "",
      imgFileName: "gothicMeltingIcecreamDarknessNightmare",
      won: false
    },
    {
      year: "2009",
      category: "music",
      songName: "sense",
      artist: "川田まみ",
      ft: "",
      imgFileName: "sense",
      won: false
    },
    {
      year: "2009",
      category: "music",
      songName: "Stand by me",
      artist: "the brilliant green",
      ft: "",
      imgFileName: "theBrilliantGreenCompleteSingleCollection",
      won: false
    },
    {
      year: "2009",
      category: "music",
      songName: "君の知らない物語",
      artist: "supercell",
      ft: "",
      imgFileName: "kiminoshiranaimonogatari",
      won: false
    },
    {
      year: "2009",
      category: "artist",
      artist: "kotoko",
      imgFileName: "kotoko",
      won: false
    },
    {
      year: "2009",
      category: "artist",
      artist: "the brilliant green",
      imgFileName: "theBrilliantGreen",
      won: false
    },
    {
      year: "2009",
      category: "artist",
      artist: "Tommy heavenly6",
      imgFileName: "tommyHeavenly6",
      won: false
    },
    {
      year: "2009",
      category: "artist",
      artist: "川田まみ",
      imgFileName: "kawadaMami",
      won: false
    },
    {
      year: "2009",
      category: "artist",
      artist: "坂本真綾",
      imgFileName: "sakamotoMaaya",
      won: true
    },
    {
      year: "2009",
      category: "record",
      songName: "Heavy Starry Chain",
      artist: "Tommy heavenly6",
      ft: "",
      imgFileName: "gothicMeltingIcecreamDarknessNightmare",
      won: false
    },
    {
      year: "2009",
      category: "record",
      songName: "sense",
      artist: "川田まみ",
      ft: "",
      imgFileName: "sense",
      won: false
    },
    {
      year: "2009",
      category: "record",
      songName: "There will be love there ~愛のある場所~",
      artist: "the brilliant green",
      ft: "",
      imgFileName: "theBrilliantGreenCompleteSingleCollection",
      won: false
    },
    {
      year: "2009",
      category: "record",
      songName: "君の知らない物語",
      artist: "supercell",
      ft: "",
      imgFileName: "kiminoshiranaimonogatari",
      won: false
    },
    {
      year: "2009",
      category: "record",
      songName: "トライアングラー",
      artist: "坂本真綾",
      ft: "",
      imgFileName: "triangler",
      won: true
    }
  ]);
});

test("Multi result: valid type search: category", () => {
  const filter: AwardDataFilter = awardDataFilterCreator("category", "video");
  expect(searchAwardData(filter)).toEqual([
    {
      year: "2011",
      category: "video",
      songName: "アルクアラウンド",
      artist: "SCANDAL",
      ft: "",
      imgFileName: "arukuAround",
      won: true
    },
    {
      year: "2011",
      category: "video",
      songName: "少女S",
      artist: "SCANDAL",
      ft: "",
      imgFileName: "scandalBestSelection",
      won: false
    },
    {
      year: "2011",
      category: "video",
      songName: "秘密",
      artist: "坂本真綾",
      ft: "",
      imgFileName: "youCantCatchMe",
      won: false
    },
    {
      year: "2011",
      category: "video",
      songName: "涙サプライズ！",
      artist: "AKB48",
      ft: "",
      imgFileName: "namidaSurprise",
      won: false
    },
    {
      year: "2011",
      category: "video",
      songName: "ねぇ",
      artist: "Perfume",
      ft: "",
      imgFileName: "nee",
      won: false
    },
    {
      year: "2017",
      category: "video",
      songName: "1-800-273-8255",
      artist: "Logic",
      ft: "ft. Alessia Cara, Khalid",
      imgFileName: "p_18002738255",
      won: true
    },
    {
      year: "2017",
      category: "video",
      songName: "Beautiful Now",
      artist: "Zedd",
      ft: "(feat. Jon Bellion)",
      imgFileName: "beautifulNow",
      won: false
    },
    {
      year: "2017",
      category: "video",
      songName: " Rockabye",
      artist: "Clean Bandit",
      ft: "(feat. Sean Paul & Anne-Marie)",
      imgFileName: "rockabye",
      won: false
    },
    {
      year: "2017",
      category: "video",
      songName: "Symphony",
      artist: "Clean Bandit",
      ft: "(feat. Zara Larsson)",
      imgFileName: "symphony",
      won: false
    },
    {
      year: "2017",
      category: "video",
      songName: "インフルエンサー",
      artist: "乃木坂46",
      ft: "",
      imgFileName: "influencer",
      won: false
    },
    {
      year: "2018",
      category: "video",
      songName: "RISE",
      artist: "League of Legends",
      ft: "(ft. The Glitch Mob, Mako, and The Word Alive)",
      imgFileName: "rise",
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
      category: "video",
      songName: "アンビバレント",
      artist: "欅坂46",
      ft: "",
      imgFileName: "anbivalent",
      won: false
    },
    {
      year: "2018",
      category: "video",
      songName: "This Is America",
      artist: "Childish Gambino",
      ft: "",
      imgFileName: "thisIsAmerica",
      won: false
    },
    {
      year: "2018",
      category: "video",
      songName: "River",
      artist: "Eminem",
      ft: "ft. Ed Sheeran",
      imgFileName: "revival",
      won: false
    }
  ]);
});
