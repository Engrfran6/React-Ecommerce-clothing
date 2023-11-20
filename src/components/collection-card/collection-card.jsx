import {useDispatch, useSelector} from 'react-redux';
import './collection-card.scss';
import {addToCart} from '../../redux/features/cart/cartSlice';

export const CollectionCard = ({item}) => {
  const dispatch = useDispatch();
  const {name, price, imgUrl} = item;

  return (
    <div className="collection_content">
      <div style={{backgroundImage: `url(${imgUrl})`}} className="collection_img" />
      <span
        onClick={() => {
          dispatch(addToCart(item));
        }}>
        Add to Cart
      </span>

      <div className="collection_footer">
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};
