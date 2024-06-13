import { configureStore } from "@reduxjs/toolkit";
import NowPlayingMovies from "../StoreSlices/NowPlayingMovies";
import popularMovies from "../StoreSlices/PopularMovies";
import TopRatedMovies from "../StoreSlices/TopRatedMovies";
import EmailPassword from "../StoreSlices/EmailPassword";

const AppStore = configureStore({
  reducer: {
    nowPlaying: NowPlayingMovies,
    popular: popularMovies,
    TopMovies: TopRatedMovies,
    Auth: EmailPassword,
  },
});

export default AppStore;
