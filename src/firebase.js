import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCB_XfkbZfOotz5fdKL6Oqiepb_HOpx9tI",
  authDomain: "quadril.firebaseapp.com",
  projectId: "quadril",
  storageBucket: "quadril.firebasestorage.app",
  messagingSenderId: "1020169427921",
  appId: "1:1020169427921:web:5369fc7ecbb74630f99ef0",
  measurementId: "G-HLEBZE63CQ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
