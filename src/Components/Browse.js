import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../Hooks/useNowPlayingMovies'
import HeroContainer from './HeroContainer'
import MovieListCategories from './MovieListCategories'
import usePopularMovies from '../Hooks/usePopularMovies'
import useUpcoming from '../Hooks/useUpcoming'
import useTopRated from '../Hooks/useTopRated'
import useOnTheAir from '../Hooks/useOnTheAir'
import GPTSearch from './GPTSearch'
import { useSelector } from 'react-redux'


const Browse = () => {

  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useUpcoming();
  useTopRated();
  useOnTheAir();
  return (
    <div>
      <Header/>
      {showGptSearch?<GPTSearch/>:
      <>
         <HeroContainer/>
         <MovieListCategories/>
       </>
      }
    </div>
  )
}

export default Browse