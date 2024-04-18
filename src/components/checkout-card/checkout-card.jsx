import './checkout-card.scss';
import {useDispatch} from 'react-redux';
import {decreaseItem, increaseItem, removeFromCart} from '../../redux/features/cartSlice/cartSlice';

export const CheckoutItemCard = ({item}) => {
  const dispatch = useDispatch();
  const {id, imgUrl, name, price, quantity} = item;

  return (
    <div key={id} className="checkout_header-content">
      <div className="checkout_item ">
        <img
          className="checkout_item-img"
          src={imgUrl}
          alt="product image"
          width={100}
          height={100}
        />
      </div>

      <span className="checkout_item">{name}</span>

      <span className="checkout_item">
        <span
          onClick={() => dispatch(decreaseItem(id))}
          style={{fontWeight: 'bolder', fontSize: '18px', cursor: 'pointer'}}>
          &lt;
        </span>
        <span style={{padding: '0 .8rem'}}>{quantity}</span>
        <span
          onClick={() => dispatch(increaseItem(id))}
          style={{fontWeight: 'bolder', fontSize: '18px', cursor: 'pointer'}}>
          &gt;
        </span>
      </span>

      <span className="checkout_item">$ {price}</span>
      <span className="checkout_item" onClick={() => dispatch(removeFromCart(id))}>
        x
      </span>
    </div>
  );
};
