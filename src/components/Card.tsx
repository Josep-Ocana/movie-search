import { useState } from "react";
import type { Movie } from "../types";

type CardProps = {
  movie: Movie;
};

const Card = ({ movie }: CardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  return (
    <>
      <div
        className={`w-full aspect-[2/3] mx-auto mb-3 rounded-lg transition-opacity duration-500 ${
          isImageLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="">
          <img
            className="rounded-lg shadow-md"
            onLoad={() => setIsImageLoaded(true)}
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`}
            alt="imagen"
          />
        </div>
        <div
          className={`transition-opacity duration-500 rounded-b-lg ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          } delay-150`}
        >
          <h2 className="text-center p-1 text-lg font-bold">{movie.title}</h2>
          <p className="text-center pb-2">{movie.release_date}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
