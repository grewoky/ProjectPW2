import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 uses this
import App from './components/Example'; // Ensure this is the correct path
require('./bootstrap');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAuEhYZdoJQyPxYQ0dOYxgrl-r6SYha3I",
  authDomain: "supermarketproject-8bad3.firebaseapp.com",
  projectId: "supermarketproject-8bad3",
  storageBucket: "supermarketproject-8bad3.appspot.com", // Corrected storage bucket URL
  messagingSenderId: "856199745624",
  appId: "1:856199745624:web:5f06dbc3a6a65e97ae3a2d",
  measurementId: "G-TX8M6CSQ5W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Ensure that the element exists before trying to render into it
const rootElement = document.getElementById('example');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement); // Create root for React 18
    root.render(<App />); // Render the App component
}