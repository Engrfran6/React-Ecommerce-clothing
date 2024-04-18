import {useDispatch, useSelector} from 'react-redux';
import './checkout.scss';
import {CheckoutItemCard} from '../../components/checkout-card/checkout-card';
import {StripeBtn} from '../../components/stripe-btn/stripe-btn';
import {selectCartItems, selectedTotalItemsPrice} from '../../redux/selectors/selector';
import {clearCart} from '../../redux/features/cartSlice/cartSlice';

export const Checkout = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const cartTotalPrice = useSelector(selectedTotalItemsPrice);

  return (
    <div className="checkout_container">
      <ul className="checkout_header">
        <li className="checkout_header-block">Product</li>
        <li className="checkout_header-block">Description</li>
        <li className="checkout_header-block">Quantity</li>
        <li className="checkout_header-block">Price</li>
        <li className="checkout_header-block">Remove</li>
      </ul>

      <div style={{width: '100%'}}>
        {cartItems.length ? (
          cartItems.map((item) => <CheckoutItemCard key={item.id} item={item} />)
        ) : (
          <span className="checkout_empty">Checkout is empty, go shopping to add items</span>
        )}
      </div>

      {cartItems.length ? (
        <div className="checkout_header-footer">
          <span onClick={() => dispatch(clearCart())} className="checkout_item-clear">
            Clear all
          </span>

          <div className="checkout_item-price-all">
            <span>TOTAL:</span>
            <span />
            <span> $ {cartTotalPrice}</span>
          </div>
        </div>
      ) : null}

      <div className="checkout_test-card">
        <h3> *** Please use the follwing card details for testing ***</h3>
        <span>Card No: 4242-4242-4242-4242</span>
        <br />
        <span>Exp: 01/24</span>
        <br />
        <span>123</span>
      </div>

      <div className="checkout_stripe-payment">
        <StripeBtn />
      </div>
    </div>
  );
};
