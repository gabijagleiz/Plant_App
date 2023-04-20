// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJTiLRpBZnCWeGm25Q2hSds3P0HgPSJo4",
  authDomain: "plants-firebase.firebaseapp.com",
  projectId: "plants-firebase",
  storageBucket: "plants-firebase.appspot.com",
  messagingSenderId: "340695583098",
  appId: "1:340695583098:web:8fa542ac2a90a381b8eec3"
};


const app = initializeApp(firebaseConfig);
// Initialize Firebase
const auth  = getAuth(app);
export { auth };




