import {useDispatch, useSelector} from 'react-redux';
import {Collections} from '../../components/collections/collections';
import './shops.scss';
import {selectShopData} from '../../redux/selectors/selector';
import {useState, useEffect} from 'react';

export const Shop = () => {
  const {isLoading, error} = useSelector((state) => state.shop);
  const shopData = useSelector(selectShopData);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
      });
  }, []); // Empty dependency array ensures this effect runs only once, when component mounts

  console.log('this products=========>', products);
  return (
    <div className="shop_container">
      <h1 className="shop_title"> Collections</h1>
      <Collections isLoading={isLoading} error={error} products={products} />
    </div>
  );
};
