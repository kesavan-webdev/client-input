// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4L0WxN_cGqnN3prlBWfX6D4lbgZLL31g",
  authDomain: "beta-firestore-16d43.firebaseapp.com",
  projectId: "beta-firestore-16d43",
  storageBucket: "beta-firestore-16d43.appspot.com",
  messagingSenderId: "97429439465",
  appId: "1:97429439465:web:e622978d059bafcb588178",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
