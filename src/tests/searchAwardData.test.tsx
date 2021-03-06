import { searchAwardData } from "../lib/searchAwardData";
import { AwardDataFilter } from "../lib/types";
import { createAwardDataFilter } from "../lib/createAwardDataFilter";

test("Single result: exact match", () => {
  const filter: AwardDataFilter = createAwardDataFilter("search", "Baby");

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
  const filter: AwardDataFilter = createAwardDataFilter("search", "cOmE oVEr");
  expect(searchAwardData(filter)).toEqual([
    {
      year: "2017",
      category: "composition",
      songName: "Come Over",
      artist: "Clean Bandit",
      ft: "(feat. Stylo G)",
      imgFileName: "comeOver",
      won: false
    }
  ]);
});

test("Multi results: exact match", () => {
  const filter: AwardDataFilter = createAwardDataFilter("search", "Octavo Dia");
  expect(searchAwardData(filter)).toEqual([
    {
      year: "2018",
      category: "accompaniment",
      songName: "Octavo Dia",
      artist: "Shakira",
      ft: "",
      imgFileName: "octavoDia",
      won: false
    },
    {
      year: "2018",
      category: "composition",
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
  const filter: AwardDataFilter = createAwardDataFilter(
    "search",
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
      category: "accompaniment",
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
  const filter: AwardDataFilter = createAwardDataFilter(
    "search",
    "1234567890XX"
  );
  expect(searchAwardData(filter)).toEqual([]);
});

test("No result: empty keyword", () => {
  const filter: AwardDataFilter = createAwardDataFilter("search", "");
  expect(searchAwardData(filter)).toEqual([]);
});

test("Multi result: valid type search: year", () => {
  const filter: AwardDataFilter = createAwardDataFilter("year", "2009");
  expect(searchAwardData(filter)).toEqual([
    {
      year: "2009",
      category: "composition",
      songName: "Heavy Starry Chain",
      artist: "Tommy heavenly6",
      ft: "",
      imgFileName: "gothicMeltingIcecreamDarknessNightmare",
      won: true
    },
    {
      year: "2009",
      category: "composition",
      songName: "I♡Xmas",
      artist: "Tommy heavenly6",
      ft: "",
      imgFileName: "gothicMeltingIcecreamDarknessNightmare",
      won: false
    },
    {
      year: "2009",
      category: "composition",
      songName: "sense",
      artist: "川田まみ",
      ft: "",
      imgFileName: "sense",
      won: false
    },
    {
      year: "2009",
      category: "composition",
      songName: "Stand by me",
      artist: "the brilliant green",
      ft: "",
      imgFileName: "theBrilliantGreenCompleteSingleCollection",
      won: false
    },
    {
      year: "2009",
      category: "composition",
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
  const filter: AwardDataFilter = createAwardDataFilter("category", "video");
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

test("No result: keyword too short (< 2)", () => {
  const filter = createAwardDataFilter("search", "ve");
  expect(searchAwardData(filter)).toEqual([]);
});

test("Single resukt: partial match", () => {
  const filter = createAwardDataFilter("search", "yiel");
  expect(searchAwardData(filter)).toEqual([
    {
      year: "2010",
      category: "vocal",
      songName: "Yield",
      artist: "Sound Horizon",
      ft: "",
      imgFileName: "p_yield",
      won: false
    }
  ]);
});

test("Multi result: partial match", () => {
  const filter = createAwardDataFilter("search", "ris");
  expect(searchAwardData(filter)).toEqual([
    {
      year: "2018",
      category: "accompaniment",
      songName: "RISE",
      artist: "League of Legends",
      ft: "(ft. The Glitch Mob, Mako, and The Word Alive)",
      imgFileName: "rise",
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
      category: "record",
      songName: "RISE",
      artist: "League of Legends",
      ft: "(ft. The Glitch Mob, Mako, and The Word Alive)",
      imgFileName: "rise",
      won: false
    }
  ]);
});

test("Multi result: valid type search: artist", () => {
  const filter = createAwardDataFilter("category", "artist");
  expect(searchAwardData(filter)).toEqual([
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
      year: "2010",
      category: "artist",
      artist: "Sound Horizon",
      imgFileName: "soundHorizon",
      won: false
    },
    {
      year: "2010",
      category: "artist",
      artist: "supercell",
      imgFileName: "supercell",
      won: true
    },
    {
      year: "2010",
      category: "artist",
      artist: "Tommy heavenly6",
      imgFileName: "tommyHeavenly6",
      won: false
    },
    {
      year: "2010",
      category: "artist",
      artist: "いきものがかり",
      imgFileName: "ikimonogakari",
      won: false
    },
    {
      year: "2010",
      category: "artist",
      artist: "坂本真綾",
      imgFileName: "sakamotoMaaya",
      won: false
    },
    {
      year: "2011",
      category: "artist",
      artist: "AKB48",
      imgFileName: "akb48",
      won: false
    },
    {
      year: "2011",
      category: "artist",
      artist: "moumoon",
      imgFileName: "moumoon",
      won: false
    },
    {
      year: "2011",
      category: "artist",
      artist: "SCANDAL",
      imgFileName: "scandal",
      won: true
    },
    {
      year: "2011",
      category: "artist",
      artist: "supercell",
      imgFileName: "supercell",
      won: false
    },
    {
      year: "2011",
      category: "artist",
      artist: "坂本真綾",
      imgFileName: "sakamotoMaaya",
      won: false
    },
    {
      year: "2012",
      category: "artist",
      artist: "AKB48",
      imgFileName: "akb48",
      won: false
    },
    {
      year: "2012",
      category: "artist",
      artist: "SKE48",
      imgFileName: "ske48",
      won: true
    },
    {
      year: "2012",
      category: "artist",
      artist: "いきものがかり",
      imgFileName: "ikimonogakari",
      won: false
    },
    {
      year: "2012",
      category: "artist",
      artist: "坂本真綾",
      imgFileName: "sakamotoMaaya",
      won: false
    },
    {
      year: "2012",
      category: "artist",
      artist: "前田敦子",
      imgFileName: "maedaAtsuko",
      won: false
    },

    {
      year: "2017",
      category: "artist",
      artist: "Avicii",
      imgFileName: "avicii",
      won: false
    },
    {
      year: "2017",
      category: "artist",
      artist: "Clean Bandit",
      imgFileName: "cleanBandit",
      won: true
    },
    {
      year: "2017",
      category: "artist",
      artist: "Ed Sheeran",
      imgFileName: "edSheeran",
      won: false
    },
    {
      year: "2017",
      category: "artist",
      artist: "twenty one pilots",
      imgFileName: "twentyOnePilots",
      won: false
    },
    {
      year: "2017",
      category: "artist",
      artist: "欅坂46",
      imgFileName: "keyakizaka46",
      won: false
    },
    {
      year: "2018",
      category: "artist",
      artist: "Eminem",
      imgFileName: "eminem",
      won: true
    },
    {
      year: "2018",
      category: "artist",
      artist: "Clean Bandit",
      imgFileName: "cleanBandit",
      won: false
    },
    {
      year: "2018",
      category: "artist",
      artist: "Kygo",
      imgFileName: "kygo",
      won: false
    },
    {
      year: "2018",
      category: "artist",
      artist: "Kendrick Lamar",
      imgFileName: "kendrickLamar",
      won: false
    },
    {
      year: "2018",
      category: "artist",
      artist: "N.W.A.",
      imgFileName: "nwa",
      won: false
    }
  ]);
});
