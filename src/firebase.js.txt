import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXogw4kJBOdYII3v3MdwZ-83MQF5xitNs",
  authDomain: "freightway-logistics-tms.firebaseapp.com",
  projectId: "freightway-logistics-tms",
  storageBucket: "freightway-logistics-tms.firebasestorage.app",
  messagingSenderId: "641355325255",
  appId: "1:641355325255:web:1c3ad6141d8537c1fa7662"
};

// Initialize Firebase only if it hasn't been initialized already
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);