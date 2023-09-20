import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: 'movies',
    initialState: {
        nowPlayingMovies:null,
        popularMovies:null,
        upcoming:null,
        topRated:null,
        onTheAir:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addUpcoming:(state, action)=>{
            state.upcoming = action.payload;
        },
        addTopRated:(state, action)=>{
            state.topRated= action.payload;
        },
        addOnTheAir:(state, action)=>{
            state.onTheAir = action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload;
        }
    }
})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addUpcoming, addTopRated, addOnTheAir} = movieSlice.actions; 


export default movieSlice.reducer;