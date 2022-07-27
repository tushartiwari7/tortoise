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
  const [leaderboad, updateLeaderboad] = useState([]);

  useEffect(() => {
    if (state.status) {
      updateLeaderboad((board) => [...board, { ...state, id: board.length }]);
    }
  }, [state]);

  return (
    <User.Provider value={{ user: state, dispatch, leaderboad }}>
      {children}
    </User.Provider>
  );
};

export const useUser = () => useContext(User);
