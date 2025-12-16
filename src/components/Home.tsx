import { useMovies } from "../hooks/useMovies";
import Card from "./Card";

const Home = () => {
  const { state } = useMovies();

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto  ">
        {state.movies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
