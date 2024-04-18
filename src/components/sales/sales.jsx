import './sales.scss';
import saleImgOne from '../../assets/images/sale/saleImgOne.webp';
import saleImgTwo from '../../assets/images/sale/saleImgTwo.webp';
import saleImgThree from '../../assets/images/sale/saleImgThree.webp';
import ShopNow from '../designLayouts/buttons/ShopNow';
import {Link} from 'react-router-dom';

export const Sales = () => {
  return (
    <div className="sales_container">
      <div className="sales1_content">
        <div className="sales1_content-img_container">
          <img src={saleImgOne} />
        </div>
        <div className="sales1_content-container">
          <div>
            <h2>Imprimante sales</h2>
            <p>
              Up to <span>30%</span> sales for all impriamnte
            </p>
            <div>
              <ShopNow />
            </div>
          </div>
        </div>
      </div>

      <div className="sales2_content">
        <div className="sales2-img_container">
          <Link to="/shop">
            <img src={saleImgTwo} />
          </Link>
        </div>
        <div className="sales2_content">
          <Link to="/shop">
            <img src={saleImgThree} />
          </Link>
        </div>
      </div>
    </div>
  );
};
