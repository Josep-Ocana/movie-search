import type { Movie } from "../types";

type CardProps = {
  movie: Movie;
};

const Card = ({ movie }: CardProps) => {
  return (
    <>
      <div className="mx-auto mb-3">
        <img
          className="rounded-lg"
          src={`https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
          alt="imagen"
        />
        <h2 className="text-center p-2 text-lg font-bold">{movie.title}</h2>
        <p className="text-center">{movie.release_date}</p>
      </div>
    </>
  );
};

export default Card;
