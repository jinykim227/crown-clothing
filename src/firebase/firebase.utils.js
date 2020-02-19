import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBNU25TIuJ5R86_T6KDCH5vBN9S0EaAeVE",
    authDomain: "crown-db-fe10e.firebaseapp.com",
    databaseURL: "https://crown-db-fe10e.firebaseio.com",
    projectId: "crown-db-fe10e",
    storageBucket: "crown-db-fe10e.appspot.com",
    messagingSenderId: "290009290659",
    appId: "1:290009290659:web:98a8ff263b3957e9f4ac16"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
    console.log('error creating user', error.message);
    }
  }
  
  return userRef;
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;