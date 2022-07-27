import {
  getRandomAlphabet,
  addTime,
  PENALTY_IN_MS,
  ALPHABET_ITERATION_COUNT,
  MAX_TIME_LIMIT,
  GAME_FINISHED,
  GAME_TIMEOUT,
} from "assets/utils";
import { useCallback, useEffect, useState } from "react";
import { message } from "antd";
import moment from "moment";
import { useUser } from "global";
import { useNavigate } from "react-router-dom";
export const useControls = () => {
  const initialTime = moment().set({ second: 0, millisecond: 0 });
  const { dispatch } = useUser();
  const navigate = useNavigate();
  const [current, setCurrent] = useState(() => ({
    alphabet: getRandomAlphabet(""),
    count: 1,
  }));
  const [timer, setTimer] = useState(initialTime.format("ss:S"));

  const updateAlphabet = useCallback(() => {
    setCurrent((curr) => ({
      alphabet: getRandomAlphabet(curr.alphabet),
      count: curr.count + 1,
    }));
  }, []);

  const validateInput = (event) => {
    const input = event.target.value;
    if (!input) return;
    const lastChar = input[input.length - 1];
    if (lastChar.toUpperCase() === current.alphabet) return updateAlphabet();
    else {
      // charge penalty of 500 ms
      setTimer((currTime) => addTime(currTime, PENALTY_IN_MS));
      return message.error("Penalized 0.5sec for Incorrect alphabet");
    }
  };

  useEffect(() => {
    // if user finishes game within the time limit
    if (current.count >= ALPHABET_ITERATION_COUNT) {
      dispatch({
        type: GAME_FINISHED,
        payload: { timeTaken: timer },
      });
      return navigate("/result");
    }

    // if user has reached the maximum time limit for the game
    if (+timer.split(":")[0] >= MAX_TIME_LIMIT) {
      dispatch({ type: GAME_TIMEOUT, payload: { timeTaken: timer } });
      return navigate("/result");
    }

    // add .1s to time after every .1 second
    const timerId = setTimeout(() => {
      setTimer((timer) => addTime(timer, 100));
    }, 100);

    // userffect cleanup function
    return () => clearTimeout(timerId);
  }, [timer, current.count, dispatch, navigate]);

  return { current, validateInput, timer };
};
