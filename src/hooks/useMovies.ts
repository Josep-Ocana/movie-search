import { useContext, useRef } from "react";
import { MovieContext } from "../context/MovieContext";

export function useMovies() {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("No se encuentra el MovieContext");
  }

  const { state, dispatch } = context;

  const abortControllerRef = useRef<AbortController | null>(null);

  const search = (query: string) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    const controller = new AbortController();
    abortControllerRef.current = controller;

    dispatch({ type: "FETCH_INIT" });

    const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=es-ES`;

    fetch(url, {
      signal: abortControllerRef.current.signal,
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCH_SUCCESS", payload: data.results });
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          dispatch({
            type: "FETCH_FAILURE",
            payload: "Error al obtener películas",
          });
        }
      });
  };

  return {
    state,
    search,
  };
}
