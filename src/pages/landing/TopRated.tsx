import React, { useState, useEffect } from 'react';
import axios from '../../config/AxiosClient';

import { Link } from 'react-router-dom';
import { currencyFormat } from '../../utility';
import { IProduct } from '../shop/products/types';

export const TopRated = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const fetchProducts = async () => {
    const { data } = await axios.get(`/api/v1/shop?sort=high-low&paginate=4`);
    setProducts(data.response.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-center text-gray-900">RECOMMENDED FOR YOU</h2>

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Link to={`/product/${product.slug}`} className='group' key={product.id}>
              <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img 
                  src={product.productImages[0].url} 
                  alt="alt image" 
                  className="h-full w-full object-cover object-center aspect-square" 
                />
              </div>
              <div className="mt-2">
                <h3 className="text-sm text-gray-900">
                  <span className="absolute"></span>
                  {product.name}
                </h3>
                <div className='flex justify-between gap-2 items-end'>
                  <p className="mt-1 text-sm text-gray-900">{currencyFormat(product.actual_price)}</p>
                  { product.discount > 0 &&
               <div className='flex items-end gap-2'>
                 <p className="text-xs text-gray-600 line-through">{currencyFormat(product.unit_price)}</p>
                 <p className="text-xs text-gray-900">{`-${currencyFormat(product.discount, '', 0)}%`}</p>
               </div> }
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
