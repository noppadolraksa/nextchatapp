// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-f0oBXRYzocQPzCZqIqbRBRKNKRyx0Vw",
  authDomain: "chata-6a69a.firebaseapp.com",
  projectId: "chata-6a69a",
  storageBucket: "chata-6a69a.appspot.com",
  messagingSenderId: "1005560476249",
  appId: "1:1005560476249:web:e579d09089294da17db748"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()
const auth = getAuth()
const provider = new GoogleAuthProvider()
export {db,auth,provider}