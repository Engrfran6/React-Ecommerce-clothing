import {useDispatch, useSelector} from 'react-redux';
import CARTICON from '../../assets/cart.svg';
import {selectTotalItems, toggleCart} from '../../redux/features/cart/cartSlice';
import './cart-icon.scss';

export const CartIcon = () => {
  const totalCartItems = useSelector(selectTotalItems);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="cart_icon" onClick={() => dispatch(toggleCart())}>
      <img className="cart_img" src={CARTICON} alt="" width={30} height={35} />
      <span className="cart_count"> {totalCartItems} </span>
    </div>
  );
};
