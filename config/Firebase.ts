// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFZ5ehbNUWfBjZM0oJYOEihfNDs378guU",
  authDomain: "hackathon-3b596.firebaseapp.com",
  projectId: "hackathon-3b596",
  storageBucket: "hackathon-3b596.appspot.com",
  messagingSenderId: "262720429480",
  appId: "1:262720429480:web:080454d7d757747585919d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
