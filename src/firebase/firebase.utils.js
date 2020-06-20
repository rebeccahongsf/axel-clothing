import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBbCdk34spPDkhH2YHs45XC3T5rL3ISJRk',
  authDomain: 'axel-db.firebaseapp.com',
  databaseURL: 'https://axel-db.firebaseio.com',
  projectId: 'axel-db',
  storageBucket: 'axel-db.appspot.com',
  messagingSenderId: '832054740220',
  appId: '1:832054740220:web:afc1a53a57b64ea7898379',
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Google Sign In Authentication
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
