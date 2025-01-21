// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACd3rsFku-oG6bwq3SUn5LTWyUesgHjRU",
  authDomain: "mnl-application.firebaseapp.com",
  projectId: "mnl-application",
  storageBucket: "mnl-application.firebasestorage.app",
  messagingSenderId: "871611824839",
  appId: "1:871611824839:web:f9e8e3d313257c39cd9ce2",
  measurementId: "G-7JHL7BL5HJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);