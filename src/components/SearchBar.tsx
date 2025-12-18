import { useState } from "react";
import { useMovies } from "../hooks/useMovies";

const SearchBar = () => {
  const { search } = useMovies();

  const [query, setQuery] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    search(query);
    setQuery("");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col mx-auto bg-yellow-500 w-full sm:w-2/3 shadow-lg rounded-lg p-4 space-y-3 mb-5"
      >
        <input
          type="text"
          className="bg-white p-2 rounded-lg w-full"
          value={query}
          placeholder="Buscar una película"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          disabled={query.trim() === ""}
          className=" bg-blue-700 hover:bg-blue-800 text-white text-center w-full sm:w-1/3 p-2 rounded-lg mx-auto ${
            disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-gray-300"
        >
          Buscar
        </button>
      </form>
    </>
  );
};

export default SearchBar;
