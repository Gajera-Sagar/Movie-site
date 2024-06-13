import { useEffect, useState } from "react";
import { Authentication, Movie_url } from "../utils/CenterData";
import MovieTrailet from "../MovieTailer/MovieTrailet";
import { useDispatch } from "react-redux";
import { NowPlayingMovie } from "../StoreSlices/NowPlayingMovies";
import PopularMoviesData from "../hooks/PopularMoviesData";
import MovieContainer from "../MovieContainer/MovieContainer";
import TopRatedMovies from "../hooks/TopRatedMovies";
import BackAndSignOutHeader from "../BackAndSignOutHeader.js/BackAndSignOutHeader";
import DashboardShimmerEffect from "../ShimmerEffect/DashboardShimmerEffect";
import UpcomingMovies from "../hooks/UpcomingMovies";
import SearchMovies from "../hooks/SearchMovie";

function App() {
  const [nowPlaying, setNowPlaying] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(Movie_url + "now_playing", Authentication)
      // fetch("https://api.themoviedb.org/3/movie/now_playing", Authentication)
      .then((response) => response.json())
      .then((data) => {
        setNowPlaying(data);
        dispatch(NowPlayingMovie(data?.results));
      })

      .catch((err) => console.error(err));
  }, []);

  PopularMoviesData();
  TopRatedMovies();
  UpcomingMovies();
  SearchMovies()

  return (
    <>
      {nowPlaying ? (
        <>
          <BackAndSignOutHeader />
          <div className="flex  bg-black flex-col items-start">
            <MovieTrailet />
          </div>
          <MovieContainer />
        </>
      ) : (
        <DashboardShimmerEffect />
      )}
    </>
  );
}

export default App;
