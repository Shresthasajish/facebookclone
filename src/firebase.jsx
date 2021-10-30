import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCAhUid8ibTL5SHbrL958aUr-fXZc75RMw",
    authDomain: "fb-clone-84d97.firebaseapp.com",
    databaseURL: "https://fb-clone-84d97.firebaseio.com",
    projectId: "fb-clone-84d97",
    storageBucket: "fb-clone-84d97.appspot.com",
    messagingSenderId: "29893801810",
    appId: "1:29893801810:web:99f4ebbf97074bc68cac8b",
    measurementId: "G-ZR6J6NYKLB"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;