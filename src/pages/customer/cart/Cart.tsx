import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from '../../../config/AxiosClient';
import { cartAction } from '../../../redux/features/cart/cartSlice';
import { Cart as CartProps } from '../../../redux/features/cart/types';
import { currencyFormat } from '../../../utility';
import { CartItem } from './CartItem';

export const Cart = () => {
  const SummaryItemStyle = 'SummaryItem flex justify-between mt-3 w-[100%]';
  const ProductDivStyle = 'flex w-[100%] h-auto items-center mobile:flex-col';
  const PriceQuantityStyle ='flex-auto flex flex-col justify-center items-center mobile:mt-7 mobile:mb-7';

  const dispatch = useDispatch();
  const [carts, setCarts] = useState<CartProps[]>([]);

  const fetchCarts = async () => {
    try {
      const { data } = await axios.get('/api/v1/cart');
      setCarts(data.response.data);
      dispatch(cartAction.setCart(data.response.data));
    } catch (err: any) {
      const error = err.response?.data?.message;
      console.log(error);
    }
  };
  
  useEffect(() => {
    fetchCarts();
  }, []);

  return (
    <div className='container mx-auto py-2 px-4 '>
      {/* vertically center parent div */}
      <div className="flex flex-row mt-7 mobile:flex-col">
        {/* product div */}
        <div className="flex flex-col flex-1 bg-white mx-2">
          { carts != null && carts.map((cart) => (
            <CartItem
              key={cart.id}
              {...cart}
            />
          ))}
        </div>
        <div className='flex-[0.4] flex flex-col items-center w-auto h-[40vh] rounded-md bg-white'>
          <h5 className='mb-4 mt-2'>Order Summary</h5>
          <div className='flex justify-between mt-3 w-[100%]'>
            <p className='text-secondary'>Subtotal ({3} items)</p>
            <p className='text-dark'>{currencyFormat(+12345)}</p>
          </div>
          <hr />
          <div className='flex justify-between mt-3 w-[100%]'>
            <p className='text-secondary'>Shipping Fee</p>
            <p className='text-dark'>{currencyFormat(+0)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
