import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "rick-morty-app-bc4ab.firebaseapp.com",
  projectId: "rick-morty-app-bc4ab",
  storageBucket: "rick-morty-app-bc4ab.appspot.com",
  messagingSenderId: "649177566409",
  appId: "1:649177566409:web:a35155e681f3f0b22a5118",
  measurementId: "G-PJ2M1GCKYD"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export default app