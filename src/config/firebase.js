// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADGC3aefWVyCCUm5eD2ozBT46DgXWVx-0",
  authDomain: "react-sign-pdf.firebaseapp.com",
  projectId: "react-sign-pdf",
  storageBucket: "react-sign-pdf.appspot.com",
  messagingSenderId: "783153616787",
  appId: "1:783153616787:web:46b80045ccd57d939bfa66",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
