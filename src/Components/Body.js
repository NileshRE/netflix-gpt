import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse';
import { createBrowserRouter} from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { Auth } from '../Utils/firebase';
import { useDispatch } from 'react-redux';
import {addUser, removeUser} from '../Utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();

    const AppRouter =createBrowserRouter([
        {
        path: "/",
        element: <Login/>
    },
    {
        path: "/Browse",
        element: <Browse/>
    },
    ]);

    useEffect(()=>{
      onAuthStateChanged(Auth, (user) => {
        if (user) {
          const {uid, email, displayName} = user;
          dispatch(addUser({uid: uid, email: email, displayName: displayName}));
        } else { 
          dispatch(removeUser());
        }
      });
    }, []);


  return (
    <div>
        <RouterProvider router={AppRouter}/>
    </div>
  )
};

export default Body