import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBVdHelyOezgX70-687s1iwEkgUZgR77AE',
  authDomain: 'react-clothing-ecommerce-7e1f5.firebaseapp.com',
  projectId: 'react-clothing-ecommerce-7e1f5',
  storageBucket: 'react-clothing-ecommerce-7e1f5.appspot.com',
  messagingSenderId: '829454673636',
  appId: '1:829454673636:web:3461385fc1910be0ad6ef1',
  measurementId: 'G-H0M05Q7P7T',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

const signInWithGoogle = async () => {
  return signInWithPopup(auth, provider).then(() => {
    window.location.href = '/';
  });
};

export {auth, firestore, signInWithGoogle};
export default app;
