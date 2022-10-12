import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC08yBq2Zi007WsdXoRSyMpgcBRjKkzZ8o",
  authDomain: "sofiniedercoderhouse.firebaseapp.com",
  projectId: "sofiniedercoderhouse",
  storageBucket: "sofiniedercoderhouse.appspot.com",
  messagingSenderId: "287231091536",
  appId: "1:287231091536:web:0fe90e023a7b83e737c255"
};

// Initialize Firebase
initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


