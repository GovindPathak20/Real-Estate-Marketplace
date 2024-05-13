// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "real-estate-marketplace-c3202.firebaseapp.com",
  projectId: "real-estate-marketplace-c3202",
  storageBucket: "real-estate-marketplace-c3202.appspot.com",
  messagingSenderId: "914768925365",
  appId: "1:914768925365:web:c074dc966f02079cc364fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);