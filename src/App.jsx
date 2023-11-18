import {Component} from 'react';
import './App.css';
import {HomePage} from './pages/homepage/home.component';
import {Routes, Route, Link} from 'react-router-dom';
import Shop from './pages/shops/shops';
import {Navbar} from './components/navbar/navbar';
import {SignInAndSignUp} from './pages/signIn-signUp/signIn-signUp';
import {auth, createUserFromProfileDocument} from './firebase/firebase.utils';
import {onAuthStateChanged} from 'firebase/auth';
import {onSnapshot} from 'firebase/firestore';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };

    this.state = {
      message: '',
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        const docRef = await createUserFromProfileDocument(authUser);

        onSnapshot(docRef, (snap) => {
          this.setState({currentUser: {id: snap.id, ...snap.data()}});
        });
      } else this.setState({currentUser: this.state.currentUser || null});
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} />
        <Routes>
          <Route
            exact
            path="/"
            element={<HomePage displayName={this.state.currentUser?.displayName} />}
          />
          <Route path="/collection" element={<Shop />} />
          <Route path="/login-logout" element={<SignInAndSignUp />} />
        </Routes>
      </>
    );
  }
}
