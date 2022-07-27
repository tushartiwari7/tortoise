import {
  GAME_FINISHED,
  GAME_TIMEOUT,
  getScore,
  MAX_TIME_LIMIT,
  RESET_USER_STATS,
  UPDATE_NAME,
} from "assets/utils";

export const userSkeleton = {
  userName: "",
  score: "",
  timeTaken: "",
  status: "",
  title: "",
};

export const reducerFn = (state, action) => {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, userName: action.payload };

    case GAME_TIMEOUT:
      return {
        ...state,
        status: "Failed",
        score: 0,
        timeTaken: action.payload.timeTaken,
        title: `Better Luck Next Time!`,
        subTitle: `Oops, You Failed ${state.userName}. You exhausted maximum time to complete this game. Try completing it within ${MAX_TIME_LIMIT} seconds`,
      };

    case GAME_FINISHED:
      return {
        ...state,
        status: "Success",
        timeTaken: action.payload.timeTaken,
        score: getScore(action.payload.timeTaken),
        title: `You Scored ${getScore(action.payload.timeTaken)} points`,
        subTitle: `Hooray! ${state.userName} you completed Game in just ${action.payload.timeTaken} seconds`,
      };

    case RESET_USER_STATS:
      return {
        ...userSkeleton,
        userName: state.userName,
      };

    default:
      return state;
  }
};

export default reducerFn;
