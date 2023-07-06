import { useAuthState } from 'react-firebase-hooks/auth';
import {auth} from '../lib/firebase';
import { useEffect, useState } from 'react';
import {firestore} from '../lib/firebase';

export function useUserData() {
    const [user] = useAuthState(auth);
    const [username, setUsername] = useState(null);
  
    //hook to listen to changes to the 'user' object
    useEffect(() => {
      //turn off realtime subscription
      let unsubscribe;
  
      if (user) {
        const ref = firestore.collection('users').doc(user.uid);
        unsubscribe = ref.onSnapshot((doc) => {
          setUsername(doc.data()?.username);
        });
      } else { //we don't have a user
        setUsername(null);
      }
  
      return unsubscribe;
    }, [user]);

    return {user, username};
}