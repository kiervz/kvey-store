import React from 'react';
import { Button } from '../../../components/common';
import { IProducts } from './types';

export const Product = ({ product }: IProducts) => {
  return (
    <div className="flex flex-col">
      <a href="https://kierveymaghanoy.com">
        <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img 
            src={product?.productImages[0].url} 
            alt="alt image" 
            className="h-full w-full object-cover object-center aspect-square" 
          />
        </div>
        <div className="mt-2">
          <h3 className="text-md text-gray-700">
            <span aria-hidden="true" className="absolute"></span>
                    Basic Tee 1
          </h3>
          <p className="mt-1 text-sm text-gray-700">₱ 1,902.40</p>
        </div>
      </a>
      <Button 
        className='px-3 py-2 text-center bg-gray-200 text-gray-700 w-full rounded-md text-sm md:text-md md:font-semibold mt-2'
        btnText={'Add to cart'}
      />
    </div>
  );
};
