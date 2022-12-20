import React from 'react';
import { currencyFormat } from '../../../utility';
import { useSelector } from 'react-redux';
import { Checkout } from './Checkout';

export const OrderSummary = () => {
  const cartState = useSelector((state: any) => state.cart);

  return (
    <div className='flex-[0.4] flex flex-col h-max rounded-md bg-white p-4'>
      <h5 className='mb-4 mt-2 text-lg font-bold'>Order Summary</h5>
      <div className='flex justify-between mt-3 w-[100%]'>
        <p className='text-gray-600'>Subtotal ({cartState.subTotalItems} items)</p>
        <p className='text-black'>{currencyFormat(+cartState.subTotal)}</p>
      </div>
      <div className='flex justify-between mt-3 mb-3 w-[100%]'>
        <p className='text-gray-600'>Shipping Fee</p>
        <p className='text-black'>{currencyFormat(+0)}</p>
      </div>
      <Checkout />
    </div>
  );
};
