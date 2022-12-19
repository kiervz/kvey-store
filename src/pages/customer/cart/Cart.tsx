import React, { useEffect, useState } from 'react';
import axios from '../../../config/AxiosClient';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../../redux/features/cart/cartSlice';
import { Cart as CartProps } from '../../../redux/features/cart/types';
import { CartItem } from './CartItem';
import { OrderSummary } from './OrderSummary';

export const Cart = () => {

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
      <div className="flex flex-col md:flex-row mt-7 mobile:flex-col gap-2">
        <div className="flex flex-col flex-1 bg-white rounded-md">
          { carts != null && carts.map((cart) => (
            <CartItem
              key={cart.id}
              {...cart}
            />
          ))}
        </div>
        <OrderSummary />
      </div>
    </div>
  );
};
