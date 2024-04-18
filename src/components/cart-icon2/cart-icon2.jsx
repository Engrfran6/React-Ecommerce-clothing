import {FaCartArrowDown} from 'react-icons/fa6';
import './cart-icon2.scss';

export const CartIcon2 = ({totalCartItems}) => {
  return (
    <div className="cartIcon2_container">
      <FaCartArrowDown />

      <span>{totalCartItems}</span>
    </div>
  );
};
