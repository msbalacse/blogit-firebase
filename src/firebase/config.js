// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAs3rPqMc-uA2aFtBxcdcArQ1gKeICYrnc",
  authDomain: "blog-e6aa6.firebaseapp.com",
  projectId: "blog-e6aa6",
  storageBucket: "blog-e6aa6.appspot.com",
  messagingSenderId: "680689159245",
  appId: "1:680689159245:web:d6279d23947726fc71a004",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
