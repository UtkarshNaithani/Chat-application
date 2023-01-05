// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxXPblntn-VirL3vTHy0nnYsQ_uY40eMw",
  authDomain: "chat-app-7dbb2.firebaseapp.com",
  projectId: "chat-app-7dbb2",
  storageBucket: "chat-app-7dbb2.appspot.com",
  messagingSenderId: "641267415009",
  appId: "1:641267415009:web:b8cd084b392e79236504a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth= getAuth(app)
export const db = getFirestore(app)