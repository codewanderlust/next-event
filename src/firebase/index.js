// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6pE9PXopX9niheePNz57DLv4y9p-aOF0",
  authDomain: "next-event-ad5a4.firebaseapp.com",
  projectId: "next-event-ad5a4",
  storageBucket: "next-event-ad5a4.appspot.com",
  messagingSenderId: "914151483775",
  appId: "1:914151483775:web:8b8dc450db5d62288f124a",
  measurementId: "G-LYLTKF4XHT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
