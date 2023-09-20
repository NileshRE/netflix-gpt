import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import HeroContainer from './HeroContainer'
import MovieListCategories from './MovieListCategories'


const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header/>
      <HeroContainer/>
      <MovieListCategories/>
    </div>
  )
}

export default Browse