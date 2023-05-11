// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5r_57S6CYkC9T6f9gxg4JEeX7ezyVdqs",
  authDomain: "hackhathon-d5dd7.firebaseapp.com",
  projectId: "hackhathon-d5dd7",
  storageBucket: "hackhathon-d5dd7.appspot.com",
  messagingSenderId: "323497498383",
  appId: "1:323497498383:web:dc6a97d26870c29150907a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
