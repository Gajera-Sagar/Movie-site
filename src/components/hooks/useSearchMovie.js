// import axios from "axios";
// import { useEffect } from "react";
// import { Authentication } from "../utils/CenterData.js";

// export default function SearchMovies(){

// useEffect(()=>{

//     const SearchResult = async()=>{
//         try {
//             const response = await axios.get("https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=godfather", Authentication)
//         console.log(response)
//         } catch (error) {
//             console.log(error)
//         }
//     }
//     SearchResult()
// },[])

// }

import axios from "axios";
import { useEffect, useState } from "react";
import { Authentication } from "../utils/CenterData.js";
import { useDispatch } from "react-redux";
import { SearchMovies } from "../StoreSlices/SearchRElatedMoviesSlice.js";

export default function useSearchMovies(movieName) {
  // const [results, setResults] = useState(null);
  // const [error, setError] = useState(null);
const dispatch = useDispatch()

  useEffect(() => {
    const SearchResult = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query="+ movieName,
          Authentication
        );
        // setResults(response);
        dispatch(SearchMovies(response?.data?.results))

      } catch (error) {
        // setError(error);
        
      }
    };
    SearchResult();
  }, [movieName]);

  // return { results, error };
}
