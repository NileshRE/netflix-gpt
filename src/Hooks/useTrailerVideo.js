import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
import { API_Options } from "../Utils/constants";

const useTrailerVideo =(movieId)=>{
    const dispatch = useDispatch();
  const movieVideo = async()=>{
    const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId +'/videos?language=en-US', API_Options);
    const json = await data.json();

    const trailervideo = json.results.filter(video=>video.type==="Trailer")
    const trailer = trailervideo.length ? trailervideo[0]: json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(()=>{
    movieVideo();
  },[]);

}

export default useTrailerVideo