import React, { useState, useEffect } from 'react';
import axios from '../../../config/AxiosClient';
import { Product } from './Product';
import { IProducts } from './types';

export const Products = () => {
  const [products, setProducts] = useState<IProducts>();

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get('/api/v1/shop');
      setProducts(data.response.data);
    } catch(err: any) {
      const error = err.response.data.message;
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="mt-6 grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      { products &&
        products.map((product: IProducts) => (
          <Product product={product} key={product.slug}/>
        )) }
    </div>
  );
};
