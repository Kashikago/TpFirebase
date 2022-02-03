// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACOOOzOwiJKSR2se1v2ltTeC7OUqMb_3Q",
  authDomain: "tpfirebase-29f57.firebaseapp.com",
  projectId: "tpfirebase-29f57",
  storageBucket: "tpfirebase-29f57.appspot.com",
  messagingSenderId: "768246788618",
  appId: "1:768246788618:web:ea929a6f15d1b87573a5f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;