// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgRy2mdRluZFdtnJNcFfr_x-Ff2o8EzpU",
  authDomain: "nithinolx-54c60.firebaseapp.com",
  projectId: "nithinolx-54c60",
  storageBucket: "nithinolx-54c60.appspot.com",
  messagingSenderId: "226872160990",
  appId: "1:226872160990:web:f875827d1c649048fc484f",
  measurementId: "G-QD87Y8KQTM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();