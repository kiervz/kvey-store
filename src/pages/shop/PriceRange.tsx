import React from 'react';
import { Button, Input } from '../../components/common';

export const PriceRange = () => {
  return (
    <div className='mt-4'>
      <h3 className='bg-gray-600 text-white my-1 py-1 px-2 text-sm font-semibold uppercase sm:my-1 sm:py-2 sm:px-4 rounded-md'>Price Range</h3>
      <div className='flex justify-center text-center'>
        <Input 
          type='number' 
          className='rounded-md border text-right px-2 h-7 text-sm w-[45%]'
          placeholder='Min Price'
        />
        <p className='font-bold mx-2 w-[5%]'>-</p>
        <Input 
          type='number' 
          className='rounded-md border text-right px-2 h-7 text-sm w-[45%]'
          placeholder='Max Price'
        />
      </div>
      <Button
        type='button'
        className='bg-gray-600 text-white py-1 px-2 rounded-md mt-1 text-sm' 
        btnText={'Apply'}
      />
    </div>
  );
};
