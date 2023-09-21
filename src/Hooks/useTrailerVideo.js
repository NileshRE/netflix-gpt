import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
import { API_Options } from "../Utils/constants";

const useTrailerVideo =(movieId)=>{
  const trailerVideo = useSelector((store)=>store.movies.trailerVideo);
    const dispatch = useDispatch();
  const movieVideo = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_Options);
    const json = await data.json();

    const trailervideo = json.results.filter(video=>video.type==="Trailer")
    const trailer = trailervideo.length ? trailervideo[1]: json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(()=>{
    (!trailerVideo) && movieVideo();
  },[]);

}

export default useTrailerVideo