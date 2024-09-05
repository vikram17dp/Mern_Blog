// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-fbff4.firebaseapp.com",
  projectId: "mern-blog-fbff4",
  storageBucket: "mern-blog-fbff4.appspot.com",
  messagingSenderId: "225129168109",
  appId: "1:225129168109:web:d9074040046e3719e520e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);