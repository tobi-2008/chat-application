// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDP0C0BVKbQcMAIDmtmeoVeMcokAxWlrJQ",
  authDomain: "chatapptest-b9e8b.firebaseapp.com",
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: "chatapptest-b9e8b",
  storageBucket: "chatapptest-b9e8b.appspot.com",
  messagingSenderId: "328806359525",
  appId: "1:328806359525:web:6db88eaad24403c2b98f0c"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
