

import axios from "axios";
import { useEffect } from "react";
import { Authentication } from "../utils/CenterData.js";
import { useDispatch } from "react-redux";
import { SearchMovies } from "../StoreSlices/SearchRElatedMoviesSlice.js";

export default function useSearchMovies(movieName) {
const dispatch = useDispatch()

  useEffect(() => {
    const SearchResult = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query="+ movieName,
          Authentication
        );
        dispatch(SearchMovies(response?.data?.results))

      } catch (error) {
        console.log(error)
        
      }
    };
    SearchResult();
  }, [movieName, dispatch]);

}
