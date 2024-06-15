import React from "react";
import { useLocation, useParams } from "react-router-dom";
import useSearchMovies from "../hooks/useSearchMovie.js";
import { useSelector } from "react-redux";
import MovieCard from "../MovieContainer/MovieCard.js";
import BackAndSignOutHeader from "../BackAndSignOutHeader.js/BackAndSignOutHeader.js";

function RelatedMovies() {
  const searchMovies = useSelector((store) => store.searchMovies.relatedMovies);

  const { moviename } = useParams();

  useSearchMovies(moviename);

  console.log(searchMovies);
  return (
   <>
   <BackAndSignOutHeader/>
    <div className="px-20 flex bg-black flex-wrap justify-around gap-5">
      {searchMovies?.map((movie) => {
        return <MovieCard movie={movie} title={movie.title} />;
      })}
    </div>
   </>
  );
}

export default RelatedMovies;
