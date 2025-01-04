import React from 'react';
import App from './components/Example';
import ReactDOM from 'react-dom/client'; // React 18 uses this
require('./bootstrap');
require('./components/Example');
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAuEhYZdoJQyPxYQ0dOYxgrl-r6SYha3I",
  authDomain: "supermarketproject-8bad3.firebaseapp.com",
  projectId: "supermarketproject-8bad3",
  storageBucket: "supermarketproject-8bad3.firebasestorage.app",
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
    root.render(<Example />);
}
ReactDOM.render(<App />, document.getElementById('example'));