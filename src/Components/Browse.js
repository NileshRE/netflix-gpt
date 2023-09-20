import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import HeroContainer from './HeroContainer'
import MovieListCategories from './MovieListCategories'
import usePopularMovies from '../Hooks/usePopularMovies'
import useUpcoming from '../Hooks/useUpcoming'
import useTopRated from '../Hooks/useTopRated'
import useOnTheAir from '../Hooks/useOnTheAir'


const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcoming();
  useTopRated();
  useOnTheAir();
  return (
    <div>
      <Header/>
      <HeroContainer/>
      <MovieListCategories/>
    </div>
  )
}

export default Browse