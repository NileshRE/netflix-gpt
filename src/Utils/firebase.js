// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvz5_x2REN4C6t4po3tcFES4iDJazCRGc",
  authDomain: "moviesgpt-3ed08.firebaseapp.com",
  projectId: "moviesgpt-3ed08",
  storageBucket: "moviesgpt-3ed08.appspot.com",
  messagingSenderId: "25495976942",
  appId: "1:25495976942:web:64ca654f05557e0e966cff",
  measurementId: "G-V5TJTZVQEX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const Auth = getAuth();
