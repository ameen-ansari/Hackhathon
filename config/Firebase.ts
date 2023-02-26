// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCuE7t1M8pKSdZGrkquShq7rayKMso_UJg",
  authDomain: "hackhathon-c3e5f.firebaseapp.com",
  projectId: "hackhathon-c3e5f",
  storageBucket: "hackhathon-c3e5f.appspot.com",
  messagingSenderId: "1081533445204",
  appId: "1:1081533445204:web:2f31030d4809a1e6b729c1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { app, auth, db };
