import {initializeApp} from 'firebase/app';
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from 'firebase/auth';
import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  onSnapshot,
} from 'firebase/firestore';
import {
  fetchShopDataFailure,
  fetchShopDataStart,
  fetchShopDataSuccess,
} from '../redux/features/shopSlice/shopSlice';
import {useDispatch} from 'react-redux';
import {addUser} from '../redux/features/userSlice/userSlice';

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
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log('google results---------->', result);
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

// user authentication
// export const unsubscribeFromAuth = onAuthStateChanged(auth, async (authUser) => {
//   try {
//     if (authUser) {
//       const docRef = await createUserFromProfileDocument(authUser);

//       onSnapshot(docRef, (snap) => {
//         const {displayName, email, createdAt} = snap.data();

//         dispatch(addUser({id: snap.id, displayName: displayName, email: email}));
//       });

//       console.log(
//         'user authentication/user data retrieval successful and user data added to the redux store'
//       );
//     }
//     return () => {
//       unsubscribeFromAuth();
//     };
//   } catch (err) {
//     console.error('Error during authentication or user data retrieval:', err);
//   }
// });

// Define thunk for adding data from Firestore
export const addDocumentsToFirestore = async (shopData) => {
  try {
    // Iterate over each category in SHOP_DATA
    for (const collectionKey of Object.keys(shopData)) {
      const collectionList = shopData[collectionKey];

      // Create a new collection reference for the current category
      const CollectionRef = collection(database, 'collections');
      const newCollectionDocRef = await addDoc(CollectionRef, collectionList);

      console.log('Category added with ID: ', newCollectionDocRef.id);
    }
  } catch (error) {
    console.error('Error adding shop data to the firestore database: ', error);
    throw error;
  }
};

export {auth, database, signInWithGoogle, createUserFromProfileDocument};
export default app;
