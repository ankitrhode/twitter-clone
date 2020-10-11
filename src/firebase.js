import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyApOBYekkZ4FnjoLB6wPpufevl8Mh4gAbA",
  authDomain: "twitter-clone-a81d2.firebaseapp.com",
  databaseURL: "https://twitter-clone-a81d2.firebaseio.com",
  projectId: "twitter-clone-a81d2",
  storageBucket: "twitter-clone-a81d2.appspot.com",
  messagingSenderId: "538261522123",
  appId: "1:538261522123:web:ad91259765d6038b777d4e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

const auth = firebase.auth();

export { auth };
