import type { Movie } from "../types";

export type MovieState = {
  movies: Movie[];
  loading: boolean;
  error: string | null;
};

export const initialState = {
  movies: [],
  loading: false,
  error: null,
};

export type Action =
  | { type: "FETCH_INIT" }
  | { type: "FETCH_SUCCESS"; payload: Movie[] }
  | { type: "FETCH_FAILURE"; payload: string };

export function movieReducer(state: MovieState, action: Action): MovieState {
  switch (action.type) {
    case "FETCH_INIT": {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case "FETCH_SUCCESS": {
      return {
        ...state,
        loading: false,
        error: null,
        movies: action.payload,
      };
    }
    case "FETCH_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }

    default:
      return state;
  }
}
