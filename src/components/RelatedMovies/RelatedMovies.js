import React from "react";
import { useParams } from "react-router-dom";
import useSearchMovies from "../hooks/useSearchMovie.js";
import { useSelector } from "react-redux";
import MovieCard from "../MovieContainer/MovieCard.js";
import BackAndSignOutHeader from "../BackAndSignOutHeader/BackAndSignOutHeader.js";
import RelatedMoviesShimmerEffect from "../ShimmerEffect/RelatedMoviesShimmerEffect.js";
import MoviePageNotFound from "./MoviePageNotFound.js";

function RelatedMovies() {
  const searchMovies = useSelector((store) => store.searchMovies.relatedMovies);

  const { moviename } = useParams();

  useSearchMovies(moviename);


  return (
    <>
      {searchMovies == null ? (
        <RelatedMoviesShimmerEffect />
      ) : searchMovies.length === 0 ? (
        <MoviePageNotFound />
      ) : (
        <>
          <BackAndSignOutHeader />
          <div className="bg-black mx-auto">
           <div className="flex px-20  bg-black flex-wrap pt-10 justify-start gap-5">
           {searchMovies?.map((movie) => {
              return <MovieCard movie={movie} title={movie.title} />;
            })}
           </div>
          </div>
        </>
      )}
    </>
  );
}

export default RelatedMovies;
