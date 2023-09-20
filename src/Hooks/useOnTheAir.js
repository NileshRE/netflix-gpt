import { useDispatch } from "react-redux";
import { API_Options } from "../Utils/constants";
import { addOnTheAir } from "../Utils/movieSlice";
import { useEffect } from "react";


const useOnTheAir = ()=>{
    const dispatch = useDispatch();

    const getOnTheAir = async()=>{
      const data = await fetch ('https://api.themoviedb.org/3/tv/on_the_air?page=1', API_Options);
      const json = await data.json();
      dispatch(addOnTheAir(json.results));
  };

    useEffect(()=>{
      getOnTheAir();
    }, []);
  
};

export default useOnTheAir