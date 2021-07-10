import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyC-HEZqPm7x7p4XkguNKhof0a4MzRgrmn8",
  authDomain: "clone-e7987.firebaseapp.com",
  databaseURL: "https://clone-e7987.firebaseio.com",
  projectId: "clone-e7987",
  storageBucket: "clone-e7987.appspot.com",
  messagingSenderId: "189738499980",
  appId: "1:189738499980:web:c91a08b828e84452e4e0a9",
  measurementId: "G-ZRD4P299VK",
});
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
