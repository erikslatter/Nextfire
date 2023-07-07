import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB0hQo6WGUttRDZwFX0JLY507b5psxMEns",
    authDomain: "nextfiresocial.firebaseapp.com",
    projectId: "nextfiresocial",
    storageBucket: "nextfiresocial.appspot.com",
    messagingSenderId: "471168820708",
    appId: "1:471168820708:web:a672118de601a2e03f93f1" 
  };
  
  
//if (!firebase.apps.length) {
firebase.initializeApp(firebaseConfig);
//}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const increment = firebase.firestore.FieldValue.increment;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const storage = firebase.storage();

export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;

// Helper functions
/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}