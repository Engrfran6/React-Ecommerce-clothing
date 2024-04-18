import {useEffect} from 'react';
import {Routes, Route} from 'react-router-dom';
import {Checkout} from './pages/checkout/checkout';
import {Shop} from './pages/shops/shops';
import {HomePage} from './pages/homepage/homepage';
import {Collection} from './pages/collection/collection';

import {SignInAndSignUp} from './pages/signIn-signUp/signIn-signUp';
import {
  addDocumentsToFirestore,
  auth,
  createUserFromProfileDocument,
  database,
} from './firebase/firebase.utils';

import {onAuthStateChanged} from 'firebase/auth';
import {collection, getDocs, onSnapshot} from 'firebase/firestore';
import {useDispatch} from 'react-redux';
import {addUser} from './redux/features/userSlice/userSlice';
import {SingleCollectionPreview} from './pages/single-collection-preview/singleCollectionPreview';
import {
  fetchShopDataFailure,
  fetchShopDataStart,
  fetchShopDataSuccess,
} from './redux/features/shopSlice/shopSlice';
import {Layout} from './components/layout/layout';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (authUser) => {
      try {
        if (authUser) {
          const docRef = await createUserFromProfileDocument(authUser);

          onSnapshot(docRef, (snap) => {
            const {displayName, email, createdAt} = snap.data();

            dispatch(addUser({id: snap.id, displayName, email}));
            console.log(
              'user authentication/user data retrieval successful and user data added to the redux store====>',
              {id: snap.id, displayName, email}
            );
          });
        }
      } catch (err) {
        console.error('Error during authentication or user data retrieval:', err);
      }
    });

    // Define thunk for fetching data from Firestore
    const fetchShopData = () => async (dispatch, getState) => {
      try {
        dispatch(fetchShopDataStart());

        // Fetch data from Firestore
        const shopDataSnapshot = await getDocs(collection(database, 'collections'));
        const shopData = shopDataSnapshot.docs.map((doc) => {
          const {title, items} = doc.data();

          return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items,
          };
        });

        // Dispatch success action with the fetched data
        console.log('fetched data from firestore', shopData);
        dispatch(fetchShopDataSuccess(shopData));
      } catch (error) {
        // Dispatch failure action if an error occurs
        console.log(' Error fetching data from firestore', error);
        dispatch(fetchShopDataFailure(error.message));
      }
    };

    return () => {
      unsubscribeFromAuth();
      dispatch(fetchShopData());
    };
  }, [dispatch]);

  // fetch('https://dummyjson.com/products')
  //   .then((res) => res.json())
  //   .then((data) => {
  //     console.log('new products======>', data.products);
  //   });

  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/collections" element={<Shop />} />
        <Route path="/login-logout" element={<SignInAndSignUp />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/collection/:collectionId" element={<Collection />} />
        <Route path="/collection/preview-item/:item-name" element={<SingleCollectionPreview />} />
      </Routes>
    </Layout>
  );
};
