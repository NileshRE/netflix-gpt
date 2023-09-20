import React from 'react'
import { useSelector } from 'react-redux'
import VdeoBg from './VdeoBg'
import VdTitle from './VdTitle'



const HeroContainer = () => {
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    if(!movies) return;

    const heroMovie = movies[0];
    const {original_title, overview, id} = heroMovie;
  return (
    <div>
      <VdTitle title={original_title} overview={overview}/> 
       <VdeoBg movieId={id}/>
    </div>
  )
}

export default HeroContainer