import { createContext, useReducer } from "react";
import {
  initialState,
  movieReducer,
  type Action,
  type MovieState,
} from "./movieReducer";

// 1. TYPE
type MovieContextType = {
  state: MovieState;
  dispatch: React.Dispatch<Action>;
};

// 2. CONTEXT
export const MovieContext = createContext<MovieContextType | null>(null);

// 3. PROVIDER
export function MovieProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(movieReducer, initialState);

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  );
}
