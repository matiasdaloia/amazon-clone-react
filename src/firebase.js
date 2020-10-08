// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDRbgGsZTkkmdn_HNnlNq9th72BEHseohg",
  authDomain: "amznclone-afb91.firebaseapp.com",
  databaseURL: "https://amznclone-afb91.firebaseio.com",
  projectId: "amznclone-afb91",
  storageBucket: "amznclone-afb91.appspot.com",
  messagingSenderId: "776838091360",
  appId: "1:776838091360:web:0c5e36d971ceaa2ae76905",
  measurementId: "G-EJ17N9X5HY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebaseApp.auth();

export { db, auth };
export default firebaseApp;
