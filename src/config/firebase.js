// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCR2U-vJu0DsJ9E9LokVZGfqLAz1MhlFOI",
  authDomain: "auth-tutorial-e4438.firebaseapp.com",
  projectId: "auth-tutorial-e4438",
  storageBucket: "auth-tutorial-e4438.appspot.com",
  messagingSenderId: "1016489026171",
  appId: "1:1016489026171:web:1cddcb32abbb164673b8de",
  measurementId: "G-P9NV16QRY5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = 
new GoogleAuthProvider();
export const db = getFirestore(app)