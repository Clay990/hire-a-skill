// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcMdDzAmXFfAC9EFcoIlZ9aCEkpH8_5fg",
  authDomain: "hire-a-skill.firebaseapp.com",
  projectId: "hire-a-skill",
  storageBucket: "hire-a-skill.firebasestorage.app",
  messagingSenderId: "58386251131",
  appId: "1:58386251131:web:a5c593205f0677152cd1de",
  measurementId: "G-03P38ZVJXB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);