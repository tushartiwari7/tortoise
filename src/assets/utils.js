import moment from "moment";

const alphabets = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export const addTime = (time, ms) => {
  const [seconds, milliseconds] = time.split(":");
  const newTime = moment()
    .set({ seconds, milliseconds: Number(milliseconds) * 100 })
    .add(ms, "ms")
    .format("ss:S");
  return newTime;
};

export const getScore = (time) => {
  const [seconds, milliseconds] = time.split(":");
  return MAX_TIME_LIMIT * 60 - (+seconds * 60 + +milliseconds);
};

/**
 *
 * @param {*} prevChar
 * @definition gets a prevchar and returns any other character except the previous character
 * @returns char
 */

const NO_OF_ALPHABETS = 25; // ALPHABETS are 26 but after filtering out the prevChar it'll be 25

export const getRandomAlphabet = (prevChar) => {
  const index = Math.floor(Math.random() * (NO_OF_ALPHABETS - 1));
  return alphabets.filter((char) => prevChar !== char)[index];
};

export const PENALTY_IN_MS = 500;
export const ALPHABET_ITERATION_COUNT = 20;
export const MAX_TIME_LIMIT = 40;

// reducer constants
export const UPDATE_NAME = "UPDATE_NAME";
export const GAME_FINISHED = "GAME_FINISHED";
export const GAME_TIMEOUT = "GAME_TIMEOUT";
export const RESET_USER_STATS = "RESET_USER_STATS";
