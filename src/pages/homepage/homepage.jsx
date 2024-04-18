import './homepage.scss';
import {useSelector} from 'react-redux';
import {selectUser} from '../../redux/selectors/selector';
import {NewArrivals} from '../../components/new-arrivals/new-arrivals';
import {BestSellers} from '../../components/best-sellers/best-sellers';
import {FeatureProduct} from '../../components/feature-product/feature-product';
import Banner from '../../components/banner/banner';
import {BannerBottom} from '../../components/banner/banner-bottom';
import {Sales} from '../../components/sales/sales';
import {YearProduct} from '../../components/product-of-the-year/year-product';

export const HomePage = () => {
  const currentAuthUser = useSelector(selectUser);

  return (
    <div className="homepage">
      <div className="greetings">
        {currentAuthUser ? (
          <>
            <h3>HELLO!</h3>
            <span>{currentAuthUser?.displayName},</span>
          </>
        ) : (
          ''
        )}
      </div>

      <Banner />
      <BannerBottom />
      <Sales />

      <FeatureProduct />
      <NewArrivals />
      <BestSellers />
      <YearProduct />
    </div>
  );
};
