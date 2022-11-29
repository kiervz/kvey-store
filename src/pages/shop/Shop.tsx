import React from 'react';
import { Banner } from './Banner';
import { Categories } from './categories';
import { PriceRange } from './PriceRange';
import { Products } from './products';
import { SortBy } from './SortBy';

export const Shop = () => {
  return (
    <div className='container mx-auto mt-4'>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='p-4 order-2 md:order-1 flex flex-col h-min'> 
          <div className='flex justify-start'>
            <a href='/#'>Home</a>
            <p className='mx-2'>/</p>
            <a href='/#'>Men</a>
            <p className='mx-2'>/</p>
            <a href='/#' className='text-gray-600'>Shoes</a>
          </div>
          <Categories />
          <PriceRange />
          <SortBy />
        </div>
        <div className='p-4 col-span-3 order-1 md:order-2 h-auto'>
          <Banner />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Shop;