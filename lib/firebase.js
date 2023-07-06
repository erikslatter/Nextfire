import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB0hQo6WGUttRDZwFX0JLY507b5psxMEns",
    authDomain: "nextfiresocial.firebaseapp.com",
    projectId: "nextfiresocial",
    storageBucket: "nextfiresocial.appspot.com",
    messagingSenderId: "471168820708",
    appId: "1:471168820708:web:a672118de601a2e03f93f1" 
  };
  
  
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();