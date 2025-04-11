// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArFUX289hvnF8pfZ-yfm30dd_jCVb4ciA",
  authDomain: "tech-connect-67164.firebaseapp.com",
  projectId: "tech-connect-67164",
  storageBucket: "tech-connect-67164.firebasestorage.app",
  messagingSenderId: "337478809019",
  appId: "1:337478809019:web:d2a9f87986db923e5d409e",
  measurementId: "G-9H0WX7LLPG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);