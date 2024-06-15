import { configureStore } from "@reduxjs/toolkit";
import NowPlayingMovies from "../StoreSlices/NowPlayingMovies.js";
import popularMovies from "../StoreSlices/PopularMovies.js";
import TopRatedMovies from "../StoreSlices/TopRatedMovies.js";
import EmailPassword from "../StoreSlices/EmailPassword.js";
import SearchMovies from "../StoreSlices/SearchRElatedMoviesSlice.js";


const AppStore = configureStore({
  reducer: {
    nowPlaying: NowPlayingMovies,
    popular: popularMovies,
    TopMovies: TopRatedMovies,
    Auth: EmailPassword,
    searchMovies : SearchMovies,
    
  },
});

export default AppStore;
