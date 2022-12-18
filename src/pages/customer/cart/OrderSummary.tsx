import React from 'react';
import { Button } from '../../../components/common';
import { currencyFormat } from '../../../utility';

export const OrderSummary = () => {
  return (
    <div className='flex-[0.4] flex flex-col h-max rounded-md bg-white p-4'>
      <h5 className='mb-4 mt-2 text-lg font-bold'>Order Summary</h5>
      <div className='flex justify-between mt-3 w-[100%]'>
        <p className='text-gray-600'>Subtotal ({3} items)</p>
        <p className='text-black'>{currencyFormat(+12345)}</p>
      </div>
      <div className='flex justify-between mt-3 mb-3 w-[100%]'>
        <p className='text-gray-600'>Shipping Fee</p>
        <p className='text-black'>{currencyFormat(+0)}</p>
      </div>
      <Button 
        type='submit'
        className='bg-[#020a0f] text-white py-2 rounded-xl enabled:hover:bg-[#212529] disabled:bg-[#6F7275] duration-300 w-[100%]'
        btnText={'Checkout'}
      />
    </div>
  );
};
