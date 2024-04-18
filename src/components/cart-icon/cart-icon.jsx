import {useDispatch, useSelector} from 'react-redux';
import CARTICON from '../../assets/cart.svg';
import {cartSelectors, toggleCart} from '../../redux/features/cartSlice/cartSlice';
import './cart-icon.scss';

export const CartIcon = () => {
  const totalCartItems = useSelector(cartSelectors.selectTotalItems);
  const dispatch = useDispatch();

  return (
    <button className="cart_icon" onClick={() => dispatch(toggleCart())}>
      <img className="cart_img" src={CARTICON} alt="" width={30} height={35} />
      <span className="cart_count"> {totalCartItems} </span>
    </button>
  );
};
