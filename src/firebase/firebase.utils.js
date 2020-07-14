import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAUENeBGv2SHFCgtnd4TfIPxt-ZY7tNsWs",
  authDomain: "e-commerce-db-ac693.firebaseapp.com",
  databaseURL: "https://e-commerce-db-ac693.firebaseio.com",
  projectId: "e-commerce-db-ac693",
  storageBucket: "e-commerce-db-ac693.appspot.com",
  messagingSenderId: "1073950745318",
  appId: "1:1073950745318:web:d289e41560f7a5df885127",
  measurementId: "G-HRBWXSQGZ8"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
