import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/common';
import { IProduct } from './types';

export const Product = ({ name, slug, actual_price, discount, productImages, other }: IProduct) => {
  return (
    <div className="flex flex-col">
      <Link to={`/product/${slug}`} className='group'>
        <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img 
            src={productImages[0].url} 
            alt="alt image" 
            className="h-full w-full object-cover object-center aspect-square" 
          />
        </div>
        <div className="mt-2">
          <h3 className="text-md text-gray-900">
            <span aria-hidden="true" className="absolute"></span>
            {name}
          </h3>
          <p className="mt-1 text-md text-gray-900">{actual_price}</p>
        </div>
      </Link>
      <Button 
        className='px-3 py-2 text-center bg-slate-900 text-white hover:bg-slate-800 w-full rounded-md text-md md:text-md md:font-semibold mt-2'
        btnText={'Add to cart'}
      />
    </div>
  );
};
