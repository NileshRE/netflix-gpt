import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from "firebase/auth";
import { Auth } from '../Utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../Utils/userSlice';
import { Logo, UserIcon } from '../Utils/constants';
import { toggleGptSearchView } from '../Utils/GptSlice';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);
  const gpt = useSelector((store)=>store.gpt.showGptSearch)
  const dispatch = useDispatch();

  const handleGptSearch =()=>{
    dispatch(toggleGptSearchView());
  };

  const handleSignOut = ()=>{
signOut(Auth).then(() => {
}).catch((error) => {
    navigate('/Error');
});
}

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(Auth, (user) => {
      if (user) {
        const {uid, email, displayName} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        navigate('/Browse');
      } else { 
        dispatch(removeUser());
        navigate('/');
      }
    });
    return ()=> unsubscribe();
  },[]);

  return (
        <div className='flex justify-between items-center w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img className='w-56' src={Logo} alt='Logo'
            />
        {user &&<div className='flex flex-row'>
          <button onClick={handleGptSearch} className="text-white text-lg mr-8 px-2 py-1 bg-transparent border border-slate-400 font-medium rounded-md animate-pulse bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 hover:animate-none"> {!gpt ? "What to watch ?" : "Home"}</button>
          <img className='w-12 h-12 rounded-md mr-6' alt='user-icon' src={UserIcon}/>
          <button onClick={handleSignOut}
          className='bg-transparent text-white px-2 py-1 mr-12'>Sign Out</button>
        </div>}
      </div>
  );
};

export default Header