import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Authentication, Movie_url } from '../utils/CenterData';
import { popularmovies } from '../StoreSlices/PopularMovies';

function PopularMoviesData() {
  
const dispatch = useDispatch()

useEffect(() => {
   
    fetch(Movie_url +"popular", Authentication)
    .then(response => response.json())
    .then(data => dispatch(popularmovies(data.results)))
   
}, []);
}

export default PopularMoviesData
