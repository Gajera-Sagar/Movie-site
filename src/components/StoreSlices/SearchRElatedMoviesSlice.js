import { createSlice } from "@reduxjs/toolkit";


const  SearchRElatedMoviesSlice = createSlice({
    name:"Search RElated Movies",
    initialState:{
        relatedMovies:null
    },
    reducers:{
        SearchMovies:(state, action)=>{
            state.relatedMovies= action.payload
        } 
    }
})
export const {SearchMovies} = SearchRElatedMoviesSlice.actions

export default SearchRElatedMoviesSlice.reducer;