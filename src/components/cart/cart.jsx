import {CustomButton} from '../custom-button/custom-button';
import './cart.scss';
import {CartCard} from '../cart-card/cart-card';
import {useSelector} from 'react-redux';
import {selectedTotalItemsPrice} from '../../redux/features/cart/cartSlice';

export const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalPrice = useSelector(selectedTotalItemsPrice);

  return (
    <div className="cart_container">
      {cartItems.map((item) => (
        <div key={item.id}>
          <CartCard item={item} />
        </div>
      ))}
      <div className="cart_button">
        <CustomButton text="CHECKOUT" totalPrice={cartTotalPrice} />
      </div>
    </div>
  );
};
