import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const MovieListCategories = () => {

  const movies = useSelector((store)=>store.movies);

  return (
    <div className="bg-black">
    <div className="bg-transparent -mt-64 relative z-20">
      <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
      </div>
      <div>
      <MovieList title={"Popular"} movies={movies.popularMovies} />
      <MovieList title={"Upcoming"} movies={movies.upcoming} />
      <MovieList title={"Top Rated"} movies={movies.topRated} /> 
      <MovieList title={"On The Air"} movies={movies.onTheAir} /> 

    </div>
    </div>
  )
}

export default MovieListCategories