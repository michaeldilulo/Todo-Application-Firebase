import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD0mGKHwc1Fq-xUyLGKY2pexYzZufPWvgk",
    authDomain: "todo-application-d0dfc.firebaseapp.com",
    databaseURL: "https://todo-application-d0dfc.firebaseio.com",
    projectId: "todo-application-d0dfc",
    storageBucket: "todo-application-d0dfc.appspot.com",
    messagingSenderId: "180118238750",
    appId: "1:180118238750:web:1bfd38562acd8abf14a00f"
});

const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const storage = firebase.storage();

export default db;