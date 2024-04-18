import {useEffect, useState} from 'react';
import {Collections} from '../collections/collections';

export const FeatureProduct = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products.slice(0, 1));
      });
  }, []);
  return (
    <div>
      <h2>Feature products </h2>
      <Collections products={products} />
    </div>
  );
};
