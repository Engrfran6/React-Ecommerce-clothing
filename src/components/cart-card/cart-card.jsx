import {useDispatch, useSelector} from 'react-redux';
import './cart-card.scss';
import {removeFromCart} from '../../redux/features/cart/cartSlice';

export const CartCard = ({item}) => {
  const dispatch = useDispatch();

  const {id, imgUrl, name, price, quantity} = item;

  return (
    <div className="cart_content">
      <span className="cart_delete-item" onClick={() => dispatch(removeFromCart(id))}>
        X
      </span>

      <div className="cart_items">
        <img src={imgUrl} alt="" width={50} height={80} />
        <div className="cart_item-description">
          <div>
            <span className="cart_title">{name}</span>
            <div style={{fontSize: '.6rem'}}>
              <span>Grey</span>, <span>medium</span>
            </div>
          </div>
          <span className="cart_price">
            <span>
              <span>X </span>
              {quantity}
            </span>
            - <span>${quantity * price}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
