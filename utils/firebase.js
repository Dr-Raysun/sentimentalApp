// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBZsLduzmI9Prh66df9kbFrXkfzTqiwNJM",
  authDomain: "sentimentapp-bf78e.firebaseapp.com",
  projectId: "sentimentapp-bf78e",
  storageBucket: "sentimentapp-bf78e.appspot.com",
  messagingSenderId: "584256980999",
  appId: "1:584256980999:web:5621098a658d918afec2a2",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
