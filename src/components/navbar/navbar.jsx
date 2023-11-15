import {Link} from 'react-router-dom';
import './navbar.scss';
import {auth} from '../../firebase/firebase.utils';
import profilePics from '../../assets/babe.jpeg';

export const Navbar = ({currentUser}) => {
  return (
    <header className="header">
      <nav className="header_container">
        <img src={''} alt="logo" />
        <div className="header_right">
          <ul className="header_list">
            <li className="header_listitems">
              <Link className="header_link" to="/collection">
                SHOP
              </Link>
            </li>
            <li className="header_listitems">
              <Link className="header_link" to="/contact">
                CONTACT
              </Link>
            </li>

            {currentUser ? (
              <li
                className="header_listitems"
                style={{display: 'flex', alignItems: 'center', gap: '.7rem'}}>
                <Link className="header_link" to="/" onClick={() => auth.signOut()}>
                  SIGN OUT
                </Link>
                <img
                  src={profilePics}
                  alt="profile photo"
                  style={{width: '3rem', height: '3rem', borderRadius: '50%'}}
                />
              </li>
            ) : (
              <li className="header_listitems">
                <Link className="header_link" to="/login-logout">
                  SIGN IN
                </Link>
              </li>
            )}
          </ul>

          <p>Cart Icon</p>

          <div className="humburger_menu">
            <div className="humburger_line" />
            <div className="humburger_line" />
            <div className="humburger_line" />
          </div>
        </div>
      </nav>
    </header>
  );
};
