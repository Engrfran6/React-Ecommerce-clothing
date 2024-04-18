import './item-card.scss';
import {useDispatch} from 'react-redux';
import {addItemDetails, addToCart} from '../../redux/features/cartSlice/cartSlice';
import {useNavigate} from 'react-router-dom';
import CARTICON from '../../assets/cart.svg';

export const ItemCard = ({item}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {title, price, images, thumbnail} = item;

  return (
    <div className="item_container">
      <div className="item_content">
        <div
          onClick={() => {
            dispatch(addItemDetails(item));
            navigate(`/collection/preview-item/${title}-${price}`);
          }}
          style={{backgroundImage: `url(${thumbnail})`}}
          className="item_img"
        />
        <span>
          <div>
            <span
              onClick={() => {
                dispatch(addToCart(item));
              }}>
              <p>Compare</p>
              <img className="cart_img" src={CARTICON} alt="" width={15} height={17} />
            </span>
            <span
              onClick={() => {
                dispatch(addToCart(item));
              }}>
              <p>Add to Cart</p>
              <img className="cart_img" src={CARTICON} alt="" width={15} height={17} />
            </span>
            <span
              onClick={() => {
                dispatch(addToCart(item));
              }}>
              <p>Veiw Details</p>
              <img className="cart_img" src={CARTICON} alt="" width={15} height={17} />
            </span>
            <span
              onClick={() => {
                dispatch(addToCart(item));
              }}>
              <p>Add to WishList</p>
              <img className="cart_img" src={CARTICON} alt="" width={15} height={17} />
            </span>
          </div>
        </span>

        <div className="item_footer-container">
          <div className="item_footer">
            <span>{title?.toUpperCase()}</span>
            <span>${price}.00</span>
          </div>
          <span>Black</span>
        </div>
      </div>
    </div>
  );
};
