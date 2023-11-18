import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import {getFirestore, collection, doc, addDoc, getDoc, getDocs, setDoc} from 'firebase/firestore';

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
const database = getFirestore(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

const signInWithGoogle = async () => {
  // return await signInWithPopup(auth, provider).then(() => {
  //   window.location.href = '/';
  // });

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .then(() => {
      window.location.href = '/';
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};

const createUserFromProfileDocument = async (authUser, additionalData) => {
  if (!authUser) return;

  const authUserUid = authUser.uid;

  const docRef = doc(database, 'users', authUserUid);
  const docSnap = await getDoc(docRef);

  if (!docSnap.exists()) {
    const {displayName, email} = authUser;
    const createdAt = new Date();

    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });

      console.log(
        'Document with ID:',
        authUserUid,
        'has been saved successfully to the firestore database'
      );
    } catch (err) {
      console.error('Error adding document: ', err);
    }
  }
  return docRef;
};

export {auth, database, signInWithGoogle, createUserFromProfileDocument};
export default app;
