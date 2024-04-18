import {Link} from 'react-router-dom';
import './navbar.scss';
import {auth} from '../../firebase/firebase.utils';
import profilePics from '../../assets/babe.jpeg';
import LOGO from '../../assets/logo.svg';
import {useSelector} from 'react-redux';
import {CartIcon} from '../cart-icon/cart-icon';
import {Cart} from '../cart/cart';
import {selectCartHidden, selectUser} from '../../redux/selectors/selector';

export const Navbar = () => {
  const currentUser = useSelector(selectUser);
  const cartHidden = useSelector(selectCartHidden);

  return (
    <header className="header">
      <nav className="header_container">
        <Link to="/">
          <img src={LOGO} alt="logo" />
        </Link>
        <div className="header_right">
          <ul className="header_list">
            <li className="header_listitems">
              <Link className="header_link" to="/">
                HOME
              </Link>
            </li>
            <li className="header_listitems">
              <Link className="header_link" to="/collections">
                SHOP
              </Link>
            </li>
            <li className="header_listitems">
              <Link className="header_link" to="/contact">
                CONTACT
              </Link>
            </li>
          </ul>
          <div>
            {currentUser ? (
              <div
                className="header_listitems-right"
                style={{display: 'flex', alignItems: 'center', gap: '.7rem'}}>
                <div
                  className="header_link-right"
                  onClick={() =>
                    auth.signOut().then(() => {
                      window.location.href = '/';
                    })
                  }>
                  SIGN OUT
                </div>
                <img
                  src={profilePics}
                  width={40}
                  height={40}
                  alt="profile photo"
                  style={{borderRadius: '50%'}}
                />
              </div>
            ) : (
              <div className="header_listitems-right">
                <Link className="header_link-right" to="/login-logout">
                  SIGN IN
                </Link>
              </div>
            )}
          </div>
          <CartIcon />
          {cartHidden ? null : <Cart />}
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
