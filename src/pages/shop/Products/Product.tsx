import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/common';
import { currencyFormat } from '../../../utility';
import { IProduct } from './types';

export const Product: React.FC<IProduct> = ({ name, slug, unit_price, actual_price, discount, productImages, other }) => {
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
          <h3 className="text-sm text-gray-900">
            <span aria-hidden="true" className="absolute"></span>
            {name}
          </h3>
          <div className='flex justify-between gap-2 items-center'>
            <p className="mt-1 text-sm text-gray-900">{currencyFormat(actual_price)}</p>
            { discount > 0 &&
            <div className='flex items-center gap-2'>
              <p className="text-sm text-gray-600 line-through">{currencyFormat(unit_price)}</p>
              <p className="text-sm text-gray-900">{`-${currencyFormat(discount, '', 0)}%`}</p>
            </div> }
          </div>
        </div>
      </Link>
      <Button 
        className='px-3 py-2 text-center bg-slate-900 text-white hover:bg-slate-800 w-full rounded-md text-md md:text-md md:font-semibold mt-2'
        btnText={'Add to cart'}
      />
    </div>
  );
};
