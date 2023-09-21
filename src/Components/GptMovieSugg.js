import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSugg = () => {
const {movieResults, movieNames}  = useSelector((store)=>store.gpt)
if(!movieNames) return null;

  return (
    <div className="text-white mt-16">
      {movieNames.map((movieNames, index)=>
      (<MovieList key={movieNames} title={movieNames} movies={movieResults[index]}/>))}
      
    </div>
  )
}

export default GptMovieSugg