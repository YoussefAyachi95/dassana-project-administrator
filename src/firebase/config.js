import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// For Authentication we have only took the Email Authentication form Firebase.
const firebaseConfig = {
  apiKey: "AIzaSyBmSg_Wmad0fF_vU7iqxMuy5V3MXJBnckA",
  authDomain: "assana-6b6d5.firebaseapp.com",
  projectId: "assana-6b6d5",
  storageBucket: "assana-6b6d5.appspot.com",
  messagingSenderId: "185963008096",
  appId: "1:185963008096:web:664796ab6381e230907305"
};

firebase.initializeApp(firebaseConfig);

//init services
const projectFirestore = firebase.firestore();

//init service for auth
const projectAuth = firebase.auth();

// init storage
const projectStorage = firebase.storage();

//timestamp
// to have a time stamp when the user logged in or out from the App and it's form Firebase
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectStorage, projectAuth, timestamp };
