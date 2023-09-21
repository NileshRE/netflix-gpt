import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../Utils/Formvalidation';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Auth } from '../Utils/firebase.js';
import { useDispatch } from 'react-redux';
import { addUser } from '../Utils/userSlice';
import { Home_Bg } from '../Utils/constants';

const Login = () => {

    const[isSignIn, setIsSignIn]= useState(true);
    const[errorMsg, setErrorMsg] = useState();
    const dispatch = useDispatch();
    
    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const ToggleSignUp =()=>{
        setIsSignIn(!isSignIn);
    }

    const validateForm =()=>{
      const message =  checkValidData(email.current.value, password.current.value);
      setErrorMsg(message);
      if(message) return;

      if(!isSignIn){
        createUserWithEmailAndPassword(Auth, email.current.value, password.current.value)
            .then((userCredential) => {
    // Signed in 
         const user = userCredential.user;
         updateProfile(Auth, {
            displayName: name.current.value
          }).then(() => {
            const {uid, email, displayName} = Auth.currentUser;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          }).catch((error) => {
            setErrorMsg(error.message)
          });
         })
         .catch((error) => {
           const errorCode = error.code;
           const errorMessage = error.message;
           setErrorMsg(errorCode+"-"+errorMessage)
         });
        }else{
        signInWithEmailAndPassword(Auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+"-"+errorMessage)
  });

      }
    }

  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={Home_Bg} alt='netflix-bg'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute text-white w-3/12 mt-6/12 my-36 mx-auto right-0 left-0 p-12 bg-black bg-opacity-70 rounded-md'>
            <h1 className='my-4 font-semibold text-2xl'>{isSignIn?"Sign In":"Sign Up"}</h1>
           {!isSignIn && <input className='p-3 my-4 w-full rounded-md bg-transparent border border-slate-400' type='text' placeholder='Enter your full name'/>}
            <input ref={email} className='p-3 my-4 w-full rounded-md bg-transparent border border-slate-400' type='text' placeholder='Enter your e-mail id'/>
            <input ref={password} className='p-3 my-4 w-full rounded-md bg-transparent border border-slate-400' type='password' placeholder='Password'/>
            <p className='text-red-700 font-semibold text-md my-1'>{errorMsg}</p>
            <button className='px-4 py-2 my-4 w-full bg-red-600 rounded-md text-white font-medium' onClick={validateForm}> {isSignIn?'Sign In':'Sign Up'} </button>
            <p className='cursor-pointer text-blue-600 underline mt-2' onClick={ToggleSignUp}> {isSignIn?'New to Netflix? Sign Up':'Already a User!!! Sign In'} Now</p>
        </form>
    </div>
  )
}

export default Login