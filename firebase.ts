// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkSbtBlf6LIxNPNDxf3nKqQ7N1Wjpo0HQ",
  authDomain: "netflix-clone-b3fdc.firebaseapp.com",
  projectId: "netflix-clone-b3fdc",
  storageBucket: "netflix-clone-b3fdc.appspot.com",
  messagingSenderId: "805699629265",
  appId: "1:805699629265:web:3f538c4fa161b06ffa55f0"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }