import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXzSqyEey5J6cR0AwD2BRJyvYOcnHg57s",
  authDomain: "divine-shiksha-a3b8c.firebaseapp.com",
  projectId: "divine-shiksha-a3b8c",
  storageBucket: "divine-shiksha-a3b8c.appspot.com",
  messagingSenderId: "162275890562",
  appId: "1:162275890562:web:a0fc9d48b3e8fa6a99eb9b",
  measurementId: "G-E17BKKZF9P",
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();

export { db };