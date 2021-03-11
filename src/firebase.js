import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCXLiq4kV5JC9US3-slVLolOROtPozzyQQ",
    authDomain: "todo-app-43597.firebaseapp.com",
    projectId: "todo-app-43597",
    storageBucket: "todo-app-43597.appspot.com",
    messagingSenderId: "508820907744",
    appId: "1:508820907744:web:213bc6c60a02472529d285",
    measurementId: "G-B5XWM0N3W7"
});

const db = firebaseApp.firestore();

export default db;