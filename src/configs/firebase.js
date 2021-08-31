// import firebase from "firebase";
import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwnC7XeFXLUxVxSwVVO9tza5chDxx2Y54",
  authDomain: "dmav-b841f.firebaseapp.com",
  projectId: "dmav-b841f",
  storageBucket: "dmav-b841f.appspot.com",
  messagingSenderId: "529591766005",
  appId: "1:529591766005:web:c8a8d9fa5939459af86ebc",
  measurementId: "G-HMGRKRWM2D",
};

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

const firebase = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

// const timestamp = firebase.firestore.field
// console.log(firebase);

export { projectAuth, projectFirestore };
