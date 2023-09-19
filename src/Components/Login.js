import React from 'react'
import Header from './Header'
import { useState } from 'react';

const Login = () => {

    const[isSignIn, setIsSignIn]= useState(true);

    const ToggleSignUp =()=>{
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg' alt='netflix-bg'/>
        </div>
        <form className='absolute text-white w-3/12 mt-6/12 my-36 mx-auto right-0 left-0 p-12 bg-black bg-opacity-70 rounded-md'>
            <h1 className='my-4 font-semibold text-2xl'>{isSignIn?"Sign In":"Sign Up"}</h1>
           {!isSignIn && <input className='p-3 my-4 w-full rounded-md bg-transparent border border-slate-400' type='text' placeholder='Enter your full name'/>}
            <input className='p-3 my-4 w-full rounded-md bg-transparent border border-slate-400' type='text' placeholder='Enter your e-mail id'/>
            <input className='p-3 my-4 w-full rounded-md bg-transparent border border-slate-400' type='password' placeholder='Password'/>
            <button className='px-4 py-2 my-4 w-full bg-red-600 rounded-md text-white font-medium'> {isSignIn?'Sign In':'Sign Up'} </button>
            <p className='cursor-pointer text-blue-600 underline' onClick={ToggleSignUp}> {isSignIn?'New to Netflix? Sign Up':'Already a User!!! Sign In'} Now</p>
        </form>
    </div>
  )
}

export default Login