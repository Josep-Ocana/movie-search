import { useState } from "react";
import { useMovies } from "../hooks/useMovies";

const SearchBar = () => {
  const { search } = useMovies();

  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Validación
    if (query.trim() === "") {
      console.log("El campo no puede estar vacio");
      return;
    }

    search(query);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="mx-auto bg-blue-950 shadow-lg rounded-lg p-4"
      >
        <input
          type="text"
          className="bg-white p-2 rounded-lg w-full"
          value={query}
          placeholder="Escribe el título de una pelicula"
          onChange={(e) => setQuery(e.target.value)}
        />
      </form>
    </>
  );
};

export default SearchBar;
