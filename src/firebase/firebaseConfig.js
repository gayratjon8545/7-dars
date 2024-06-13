// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJdgtv1_6P1wU29e67tZ7tWU0pSVj6-dM",
  authDomain: "mystore-85fb8.firebaseapp.com",
  projectId: "mystore-85fb8",
  storageBucket: "mystore-85fb8.appspot.com",
  messagingSenderId: "561479791234",
  appId: "1:561479791234:web:e516aa31063cbb16fffa9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth = getAuth(app);
