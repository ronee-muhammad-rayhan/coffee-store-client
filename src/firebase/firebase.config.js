// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC9cdTYdcXgUiDXqKS3aUrTupxdVf-vEGA",
    authDomain: "coffee-store-rmr.firebaseapp.com",
    projectId: "coffee-store-rmr",
    storageBucket: "coffee-store-rmr.appspot.com",
    messagingSenderId: "334635446394",
    appId: "1:334635446394:web:0500e67f6f2c65af6e8bc3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)