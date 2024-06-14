// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABHsvdcECxtu0-pMtFExciZNOJ3iJpEsw",
  authDomain: "dbrestaurantmenu.firebaseapp.com",
  databaseURL: "https://dbrestaurantmenu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "dbrestaurantmenu",
  storageBucket: "dbrestaurantmenu.appspot.com",
  messagingSenderId: "906016981264",
  appId: "1:906016981264:web:9a422ce66f59f48ebae595",
  measurementId: "G-46L084V0R1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export {database, analytics};