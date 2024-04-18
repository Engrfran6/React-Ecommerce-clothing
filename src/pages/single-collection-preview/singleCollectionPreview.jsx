import {useDispatch, useSelector} from 'react-redux';
import {clearItemDetails} from '../../redux/features/cartSlice/cartSlice';
import {useNavigate} from 'react-router-dom';
import './single-collection-preview.scss';

export const SingleCollectionPreview = () => {
  const selectedItem = useSelector((state) => state.cart.itemDetails);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!selectedItem) {
    return null;
  }

  const {name, price, imgUrl} = selectedItem;

  return (
    <div className="collection_content">
      <div style={{backgroundImage: `url(${imgUrl})`}} className="collection_img" />
      <div>
        <div style={{display: 'flex', alignItems: 'center', gap: '2rem'}}>
          <h2>{name}</h2>
          <h2>Price: ${price}</h2>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus placeat non
          cupiditate eius, expedita deserunt reiciendis culpa sunt, ratione autem officia molestiae,
          reprehenderit eveniet. Id sequi corporis ad. Nulla dolorem ipsa odit rem dolore ullam
          neque, perferendis sequi et, quaerat explicabo doloribus officia. Reiciendis aliquam,
          facilis corrupti consequatur fugit nesciunt.
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus tempore nobis
          aliquam fugiat, quod quasi fuga hic voluptatum voluptate quis nisi iste consequuntur saepe
          odit vitae sit iure. A dolorem obcaecati, in odit doloremque cumque optio, illum beatae,
          perferendis eaque delectus ea recusandae. Nesciunt libero similique dolor sit laudantium,
          alias eligendi adipisci aut minus provident quaerat aliquid, quos deserunt? Nihil cumque
          cum eos! Nostrum consequatur numquam inventore. Animi, provident doloribus.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, ad. Praesentium
          cupiditate distinctio officia laborum sunt beatae quam obcaecati commodi aliquam eos omnis
          animi reiciendis numquam minima, enim eius voluptates aspernatur aperiam. Inventore,
          maiores ad pariatur dolor tenetur perferendis, commodi perspiciatis cupiditate aliquam
          culpa doloremque? Amet ut autem architecto soluta at mollitia corporis maxime itaque
          ducimus aperiam numquam illum est eligendi inventore, cupiditate quasi quae fuga! Quos
          sit, consequatur repellendus magnam impedit ullam officiis. Quia neque perspiciatis
          consequatur ullam nihil! Ab esse expedita officiis reiciendis minima commodi cum quis
          mollitia dolorem vel! Consequatur ullam aliquam molestias officia aperiam ducimus veniam!
        </p>
      </div>

      <button
        onClick={() => {
          dispatch(clearItemDetails());
          navigate('/collection');
        }}>
        Close
      </button>
    </div>
  );
};
