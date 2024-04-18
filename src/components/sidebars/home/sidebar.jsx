import {BiSolidUserAccount} from 'react-icons/bi';
import './sidebar.scss';
import {CartIcon2} from '../../cart-icon2/cart-icon2';
import {useSelector} from 'react-redux';
import {cartSelectors} from '../../../redux/features/cartSlice/cartSlice';
import {useNavigate} from 'react-router-dom';
import {selectUser} from '../../../redux/selectors/selector';

export const Sidebar = () => {
  const currentUser = useSelector(selectUser);
  const totalCartItems = useSelector(cartSelectors.selectTotalItems);
  const navigate = useNavigate();

  const handleCartIconClick = () => {
    if (!currentUser) {
      alert('Login/Register an account or continue as a guess');
      navigate('/checkout');
    } else navigate('/checkout');
  };
  const handleProfileClick = () => {
    if (!currentUser) {
      navigate('/login-logout');
    } else '';
  };

  console.log('currentUser:', currentUser);
  return (
    <div className="sidebar_container">
      <span onClick={handleProfileClick} className="user-icon">
        <BiSolidUserAccount />
      </span>
      <span onClick={handleCartIconClick} className="cart-icon2">
        <CartIcon2 totalCartItems={totalCartItems} />
        <p>Buy Now</p>
      </span>
    </div>
  );
};
