// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore"

import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn9aw8Oe8d06okX7No-3lWWNMTDwPFSUY",
  authDomain: "kelas-f3975.firebaseapp.com",
  projectId: "kelas-f3975",
  storageBucket: "kelas-f3975.appspot.com",
  messagingSenderId: "1076562587436",
  appId: "1:1076562587436:web:73b395e075b1e5a47fc689",
  measurementId: "G-3Q9V28VDD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();