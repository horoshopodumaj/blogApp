// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "blogtest-da9b2.firebaseapp.com",
    projectId: "blogtest-da9b2",
    storageBucket: "blogtest-da9b2.appspot.com",
    messagingSenderId: "963053086313",
    appId: "1:963053086313:web:d69c6efd0c2d6f697b24f8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
