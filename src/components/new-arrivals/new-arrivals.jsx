import {useEffect, useState} from 'react';
import {Collections} from '../collections/collections';

export const NewArrivals = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products.slice(0, 9));
      });
  }, []);
  return (
    <div>
      <h2>New Arrivals</h2>
      <Collections products={products} />
    </div>
  );
};
