import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addUpcoming } from "../Utils/movieSlice";
import { useEffect } from "react";


const useUpcoming = ()=>{
    const dispatch = useDispatch();

    const getUpcoming = async()=>{
      const data = await fetch ('https://api.themoviedb.org/3/movie/upcoming?page=1', API_Options);
      const json = await data.json();
      dispatch(addUpcoming(json.results));
  };

    useEffect(()=>{
      getUpcoming();
    }, []);
  
};

export default useUpcoming;