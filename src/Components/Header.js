import React from 'react'
import { useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { Auth } from '../Utils/firebase';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut = ()=>{
signOut(Auth).then(() => {
  navigate('/');
}).catch((error) => {
    navigate('/Error');
});

  }
  return (
        <div className='flex justify-between items-center w-screen absolute mx- 8 px-8 py-2 bg-gradient-to-b from-black z-10'>
            <img className='w-56' src='
             https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' 
                alt='Logo'
            />
        {user &&<div className='flex flex-row'>
          <img className='w-12 h-12 rounded-md mr-8' alt='user-icon' src='https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg'/>
          <button onClick={handleSignOut}
          className='bg-transparent border border-slate-400 rounded-md text-white font-medium px-2 py-1'>Sign Out</button>
        </div>}
      </div>
  );
};

export default Header