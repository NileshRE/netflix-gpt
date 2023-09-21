import { useDispatch, useSelector } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addTopRated} from "../Utils/movieSlice";
import { useEffect } from "react";


const useTopRated = ()=>{
    const dispatch = useDispatch();
    const topRated = useSelector((store)=>store.movies.topRated);

    const getTopRated = async()=>{
      const data = await fetch ('https://api.themoviedb.org/3/tv/top_rated?page=1', API_Options);
      const json = await data.json();
      dispatch(addTopRated(json.results));
  };

    useEffect(()=>{
     !topRated && getTopRated();
    }, []);
  
};

export default useTopRated