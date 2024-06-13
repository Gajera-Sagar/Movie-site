import { useEffect } from 'react'
import { Authentication } from '../utils/CenterData';
import { Axios } from '../Axios/Axios';
import { useDispatch } from 'react-redux';
import { UpComingMovies } from '../StoreSlices/PopularMovies';

function UpcomingMovies() {
  const dispatch =  useDispatch()

useEffect(() => {
    
   const UpcomingMovies = async() => {
    try {
        let response =await Axios.get( "/upcoming", Authentication)
        dispatch(UpComingMovies(response?.data?.results))

    } catch (error) {
        console.log(error)
    }
   }
   
   UpcomingMovies();
}, [dispatch]);
}

export default UpcomingMovies
