import {useEffect} from 'react';
import './App.css';
import {HomePage} from './pages/homepage/home.component';
import {Routes, Route, Link, useNavigate} from 'react-router-dom';
import Shop from './pages/shops/shops';
import {Navbar} from './components/navbar/navbar';
import {SignInAndSignUp} from './pages/signIn-signUp/signIn-signUp';
import {auth, createUserFromProfileDocument} from './firebase/firebase.utils';
import {onAuthStateChanged} from 'firebase/auth';
import {onSnapshot} from 'firebase/firestore';
import {useDispatch, useSelector} from 'react-redux';
import {addUser, selectUser} from './redux/features/user/userSlice';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribeFromAuth = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const docRef = await createUserFromProfileDocument(authUser);

        onSnapshot(docRef, (snap) => {
          const {displayName, email, createdAt} = snap.data();
          const time = createdAt.seconds;

          dispatch(addUser({id: snap.id, displayName, email, time}));
        });
      }
    });

    return () => {
      unsubscribeFromAuth();
    };
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/collection" element={<Shop />} />
        <Route path="/login-logout" element={<SignInAndSignUp />} />
      </Routes>
    </>
  );
};
