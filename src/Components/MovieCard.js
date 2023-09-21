import React from 'react'
import { IMG_CDN } from '../Utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 p-4 hover:scale-105">
        <img alt='movie-poster' src={IMG_CDN+posterPath}/>
    </div>
  )
}

export default MovieCard