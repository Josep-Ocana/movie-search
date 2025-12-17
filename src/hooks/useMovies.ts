import { useContext, useRef } from "react";
import { MovieContext } from "../context/MovieContext";

export function useMovies() {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error("No se encuentra el MovieContext");
  }

  const { state, dispatch } = context;

  // Uso useRef para guardar el controlador de la petición
  const abortControllerRef = useRef<AbortController | null>(null);

  // Uspo de useRef para el Debounce: es una técnica que agrupa múltiples llamadas consecutivas a una función para ejecutarla una sola vez, únicamente cuando la acción se detiene por un tiempo determinado, en mi caso 4 milisegundos.
  const timeOutRef = useRef<number | null>(null);

  const search = (query: string) => {
    // Cancelación del TimeOut
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    // Creación del setTimeOut
    timeOutRef.current = setTimeout(() => {
      // Si hay una petición previa en curso, la cancelo
      abortControllerRef.current?.abort();

      // Creo el nuevo controlador para la petición actual
      const controller = new AbortController();
      abortControllerRef.current = controller;

      dispatch({ type: "FETCH_INIT" });

      const ACCESS_TOKEN = import.meta.env.VITE_ACCESS_TOKEN;
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&language=es-ES`;

      fetch(url, {
        // Paso la señal al fetch
        signal: abortControllerRef.current.signal,
        headers: {
          Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          dispatch({ type: "FETCH_SUCCESS", payload: data.results });
        })
        .catch((error) => {
          // Si la el error viene del AbortController lo ignoro
          if (error.name !== "AbortError") {
            dispatch({
              type: "FETCH_FAILURE",
              payload: "Error al obtener películas",
            });
          }
        });
    }, 400);
  };

  return {
    state,
    search,
  };
}
