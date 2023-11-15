import {Component} from 'react';
import './App.css';
import {HomePage} from './pages/homepage/home.component';
import {Routes, Route, Link} from 'react-router-dom';
import Shop from './pages/shops/shops';
import {Navbar} from './components/navbar/navbar';
import {SignInAndSignUp} from './pages/signIn-signUp/signIn-signUp';
import {auth} from './firebase/firebase.utils';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({currentUser: user});
      console.log('user=====', user);
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
          <Route exact path="/" element={<HomePage />} />
          <Route path="/collection" element={<Shop />} />
          <Route path="/login-logout" element={<SignInAndSignUp />} />
        </Routes>
      </>
    );
  }
}
