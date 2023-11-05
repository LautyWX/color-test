// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD955GDBa_xQ1lOBdO_UcyY8NXogDOzWUw",
  authDomain: "color-palette-72bc5.firebaseapp.com",
  projectId: "color-palette-72bc5",
  storageBucket: "color-palette-72bc5.appspot.com",
  messagingSenderId: "491387200272",
  appId: "1:491387200272:web:e99711c03d237e722afb95",
  measurementId: "G-F1NGW3V3LZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore();