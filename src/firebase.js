// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlw9g6V0Ax7VsdHz0bcYGa8Mm5IUgAUf4",
  authDomain: "clone-yt-bc604.firebaseapp.com",
  projectId: "clone-yt-bc604",
  storageBucket: "clone-yt-bc604.appspot.com",
  messagingSenderId: "785734563115",
  appId: "1:785734563115:web:96544f4da805f0b29f416e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)
const provider = new GoogleAuthProvider();

export {db, auth, provider}
