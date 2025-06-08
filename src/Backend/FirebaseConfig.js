// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDSQjxr1oAt8a6z3qi-4EFXxGurFRGYFV4",
  authDomain: "bharatbit-2097e.firebaseapp.com",
  projectId: "bharatbit-2097e",
  storageBucket: "bharatbit-2097e.firebasestorage.app",
  messagingSenderId: "153797609499",
  appId: "1:153797609499:web:49ad76c7e45b4c1cc790be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export {database};