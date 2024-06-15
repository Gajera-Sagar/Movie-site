import React from "react";
import { Image_Path } from "../utils/CenterData.js";
import { Link } from "react-router-dom";

function MovieCard({ movie, title }) {
  return (
    <Link to={`/dashboard/${title}/${movie.id}`} state={movie}>
      <div className=" group w-60 h-[400px] flex-shrink-0 mx-2 rounded-lg relative group overflow-hidden">
        {movie?.poster_path ? (
          <img
            className="w-full h-[80%] object-cover rounded-lg"
            src={Image_Path + movie.poster_path}
            alt="Movie Card"
          />
        ) : (
          <img
            className="w-full h-[80%] object-cover rounded-lg"
            src="/images/dummyposter.jpg"
            alt="Movie Card"
          />
        )}
        <h1 className="text-center text-white font-bold mt-2 tracking-wider">{movie?.title}</h1>

        <div className="w-full h-[80%] flex flex-col rounded-lg justify-center items-center bg-gray-500 bg-opacity-50 overflow-hidden text-white p-5 absolute top-0 left-full transition duration-1000 ease-in-out transform group-hover:-translate-x-full">
          <h1 className="font-bold text-xl mb-3 leading-6  text-center">
            {movie?.title}
          </h1>

          <p className="leading-4 text-center ">
            {movie?.overview?.length > 381
              ? movie?.overview.slice(0, 380) + "..."
              : movie?.overview}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default MovieCard;
