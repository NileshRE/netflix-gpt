// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCegyO6GK-z6t9kMkdfbW1JezyseXsFB3s",
  authDomain: "netflix-gpt-3dec6.firebaseapp.com",
  projectId: "netflix-gpt-3dec6",
  storageBucket: "netflix-gpt-3dec6.appspot.com",
  messagingSenderId: "674594649145",
  appId: "1:674594649145:web:48deb0732448a65dbfc9e8",
  measurementId: "G-5SD2SD3TQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const Auth = getAuth();

