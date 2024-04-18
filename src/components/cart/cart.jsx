import {CustomButton} from '../custom-button/custom-button';
import './cart.scss';
import {CartCard} from '../cartItem-card/cartItem-card';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {toggleCart} from '../../redux/features/cartSlice/cartSlice';
import {selectCartItems, selectedTotalItemsPrice} from '../../redux/selectors/selector';

export const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectedTotalItemsPrice);

  return (
    <div className="cart_container">
      {cartItems.length ? (
        cartItems.map((item) => (
          <div key={item.id}>
            <CartCard item={item} />
          </div>
        ))
      ) : (
        <span className="cart_empty">Your cart is empty</span>
      )}
      <div className="cart_button">
        <CustomButton
          onClick={() => {
            cartItems.length ? navigate('/checkout') : navigate('/collections');
            dispatch(toggleCart());
          }}
          text="CHECKOUT"
          totalPrice={`$${cartTotalPrice}`}
        />
      </div>
    </div>
  );
};
