import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  return (
    <div className="mx-6">
    <h1 className="font-medium text-xl text-white mb-4">{title}</h1>
    <div className="flex overflow-x-scroll no-scrollbar">
            <div className="flex"> 
                {movies?.map((movie)=><MovieCard key={movie.id} posterPath={movie.poster_path}/>)}
            </div>
    </div>
    </div>
  )
}

export default MovieList