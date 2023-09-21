import React, { useRef } from 'react'
import { API_Options, Search_Bg } from '../Utils/constants'
import OpenAi from '../Utils/openAi';
import { addGptMovieResult } from '../Utils/GptSlice';
import { useDispatch } from 'react-redux';

const GptSearchbar = () => {
    const dispatch = useDispatch();
    const searchText = useRef(null);
    const searchMovieTMDB = async(movie)=>{
        const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_Options);
        const json = await data.json()
        return json.results;
    }
const handleGptSearchClk =async()=>{

    const gptquery="Act as a Movie recommendation System and suggest movies for the query:" +searchText.current.value+ ". only give me list of 5 movies seperated by comma(,) like example given ahead. Example: Yaariyan, Partner, Ready, Dhol, Golmaal"
    const gptResults = await OpenAi.chat.completions.create({
        messages: [{ role: 'user', content: gptquery }],
        model: 'gpt-3.5-turbo',
      });
    const gptMovies = gptResults.choices?.[0].message?.content.split(",");

    const PromiseArray = gptMovies.map((movie)=>searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(PromiseArray); 

    console.log(tmdbResults)

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults}));

};

  return (
    <div>
        <img className="w-screen aspect-ratio fixed -z-40" alt='movie-bg' src={Search_Bg}/>
        <form className=" flex items-end justify-center" onSubmit={(e)=>e.preventDefault()}>
            <input ref={searchText} type='text' placeholder='What would like to watch today?' className='p-4 mr-1 ml-12 mt-48 w-10/12 border rounded-md border-slate-400' />
            <button className="text-white font-bold text-3xl px-6 py-3 rounded-md bg-red-500 hover:opacity-70" onClick={handleGptSearchClk}>&gt;</button>
        </form>
    </div>
  )
}

export default GptSearchbar