// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZgiRHU0lk7pIcQspnj6Y5m_XJbCt9HRE",
    authDomain: "the-dragon-news.firebaseapp.com",
    projectId: "the-dragon-news",
    storageBucket: "the-dragon-news.appspot.com",
    messagingSenderId: "893947507627",
    appId: "1:893947507627:web:bd0679a38e207cf1fc18ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;