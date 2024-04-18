import './year-product.scss';
import {Link} from 'react-router-dom';
import productOfTheYear from '../../assets/images/products/productOfTheYear.webp';
import ShopNow from '../designLayouts/buttons/ShopNow';

export const YearProduct = () => {
  return (
    <Link to="/shop">
      <div className="year-product_container">
        <img src={productOfTheYear} />
        <div>
          <h1>Product of The year</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat cupiditate modi amet!
            Facilis, aperiam quaerat.
          </p>
          <ShopNow />
        </div>
      </div>
    </Link>
  );
};
