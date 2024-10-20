// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6mMkvY6w6CUQhvxlxk70RuMoXegDmut4",
  authDomain: "test-track-e6006.firebaseapp.com",
  projectId: "test-track-e6006",
  storageBucket: "test-track-e6006.appspot.com",
  messagingSenderId: "966754273244",
  appId: "1:966754273244:web:e0f472424d14f0d08b3119"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);