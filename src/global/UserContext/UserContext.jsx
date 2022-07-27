import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import reducerFn, { userSkeleton } from "./UserReducer";

const User = createContext(null);
export const UserContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducerFn, userSkeleton);
  const [leaderboard, updateLeaderboard] = useState([]);

  // load leaderboard from localStorage on page refresh
  useEffect(() => {
    if (localStorage.getItem("leaderboard"))
      updateLeaderboard(JSON.parse(localStorage.getItem("leaderboard")));
  }, []);

  // update leaderboard after user finishes a game
  useEffect(() => {
    if (state.status)
      updateLeaderboard((board) => [...board, { ...state, id: board.length }]);
  }, [state]);

  // after updating leaderboard in state, also update leaderboard in localStorage
  useEffect(() => {
    if (leaderboard.length)
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  }, [leaderboard]);

  return (
    <User.Provider value={{ user: state, dispatch, leaderboard }}>
      {children}
    </User.Provider>
  );
};

export const useUser = () => useContext(User);
