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
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;


    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email, photoURL } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set ({
            displayName,
            email,
            createdAt,
            photoURL,
            ...additionalData
          })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;