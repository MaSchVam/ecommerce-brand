import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDEUtZwktpN8h3hP-Upa4T_KL5NVwx8E_8",
    authDomain: "brand-db-3a3c6.firebaseapp.com",
    databaseURL: "https://brand-db-3a3c6.firebaseio.com",
    projectId: "brand-db-3a3c6",
    storageBucket: "brand-db-3a3c6.appspot.com",
    messagingSenderId: "767252281557",
    appId: "1:767252281557:web:75005a9af6baecfbd9ca5c",
    measurementId: "G-JSLZHPYD9Z"
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;