import {useDispatch} from 'react-redux';
import {addItemDetails, addToCart} from '../../redux/features/cartSlice/cartSlice';
import {useNavigate} from 'react-router-dom';
import CARTICON from '../../assets/cart.svg';
import imgUrl from '../../assets/babe1.jpeg';

export const TestingCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const name = 'mike donald';
  const price = 400;

  return (
    <div className="collection_content">
      <div
        onClick={() => {
          dispatch(addItemDetails(item));
          navigate(`/collection/preview-item/${name}-${price}`);
        }}
        style={{backgroundImage: `url(${imgUrl})`}}
        className="collection_img"
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

      <div className="collection_footer">
        <span>{name}</span>
        <span>${price}</span>
      </div>
    </div>
  );
};
