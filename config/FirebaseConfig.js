// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "adopt-me-1fdb7.firebaseapp.com",
  projectId: "adopt-me-1fdb7",
  storageBucket: "adopt-me-1fdb7.firebasestorage.app",
  messagingSenderId: "781319213119",
  appId: "1:781319213119:web:1df3037ecb54010cbd288a",
  measurementId: "G-9QWRH8ZLQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);