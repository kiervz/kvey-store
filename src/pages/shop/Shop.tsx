import React from 'react';
import { Link } from 'react-router-dom';
import { Categories } from './categories';
import { PriceRange } from './priceRange';
import { Products } from './products';
import { SortBy } from './SortBy';

export const Shop = () => {
  return (
    <div className='container mx-auto mt-4'>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='p-4 order-2 md:order-1 flex flex-col h-min'> 
          <div className='flex justify-start text-sm'>
            <Link to='/'>Home</Link>
            <p className='mx-2'>/</p>
            <p className='text-gray-600'>Shop</p>
          </div>
          <Categories />
          <PriceRange
            initalMin={1000}
            initalMax={10000}
            min={0}
            max={30000}
            step={100}
            priceCap={200}
          />
          <SortBy />
        </div>
        <div className='p-4 col-span-3 order-1 md:order-2 h-auto'>
          <div className='flex justify-start'>
            <p className='text-sm'>Showing 1-12 of 53 results</p>
          </div>
          {/* <Banner /> */}
          <Products />
        </div>
      </div>
    </div>
  );
};

export default Shop;
