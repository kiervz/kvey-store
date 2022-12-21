import React, { useState } from 'react';
import axios from '../../../config/AxiosClient';

import { Cart } from '../../../redux/features/cart/types';
import { FaTrashAlt } from 'react-icons/fa';
import { currencyFormat } from '../../../utility/DisplayHelpler';
import { Button, Input, LoaderBackdrop } from '../../../components/common';

import { cartAction } from '../../../redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';

export const CartItem: React.FC<Cart> = ({ id, name, slug, brand, unit_price, price, discount, qty, sub_total, selected, image }) => {  
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState<number>(qty);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isCheck, setIsCheck] = useState<boolean>(Boolean(selected));
  
  const handleSelectItem = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsLoading(true);
    try {
      const { data } = await axios.put('/api/v1/cart/select', {
        cart_id: Number(e.target.value),
        is_selected: Number(!!e.target.checked)
      });

      setIsCheck(!e.target.checked);
      dispatch(cartAction.setCart(data.response.data));
    } catch (err: any) {
      const error = err.response?.data?.message;
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const incrementQty = () => {
    if (quantity < 100) {
      setQuantity(quantity => quantity += 1);
      updateItemQuantity('add');
    }
  };

  const decrementQty = () => {
    if (quantity > 1) {
      setQuantity(quantity => quantity -= 1);
      updateItemQuantity('subtract');
    }
  };

  const updateItemQuantity = async (action: string) => { 
    setIsLoading(true);
    try {
      const { data } = await axios.put('/api/v1/cart/quantity', {
        cart_id: id,
        action: action
      });
      
      dispatch(cartAction.setCart(data.response.data));
    } catch (err: any) {
      const error = err.response?.data?.message;
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const deleteItem = async () => {
    setIsLoading(true);
    try {
      await axios.delete('/api/v1/cart', {
        data: {
          cart_item_id: [id]
        }
      });
      
      dispatch(cartAction.removeCartItem({ cartId: id }));
    } catch (err: any) {
      const error = err.response?.data?.message;
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading ? <LoaderBackdrop /> : ''}
      <div className='w-[100%] h-auto pr-4 mt-4 mb-4'>
        <div className="grid grid-cols-12">
          <div className='flex justify-center items-center gap-2 col-span-2'>
            <Input 
              type="checkbox" 
              id={slug} 
              className="border-slate-300 text-slate-900 focus:ring-slate-200 cursor-pointer"
              value={id}
              checked={isCheck}
              onChange={(e) => handleSelectItem(e)}
            />
            <img
              className="product_img h-24 w-16 lg:h-28 lg:w-20 object-cover"
              src={image}
              alt="product_img"
            />
          </div>
          <div className="flex items-start h-auto flex-col ml-5 col-span-10">
            <p className='font-medium'>{name}</p>
            <div className='grid grid-cols-12 w-[100%]'>
              <div className='col-span-full lg:col-span-5'>
                <p>{brand}</p>
              </div>
              <div className='col-span-4 lg:col-span-2'>
                <p className='text-orange-600'>{ currencyFormat(+price) }</p>
                { discount > 0 && <p className='text-gray-500 line-through text-sm'>{ currencyFormat(+unit_price) }</p> }
              </div>
              <div className='col-span-5 lg:col-span-3'>
                <div className="flex items-center justify-center w-min">
                  <div className="flex">
                    <Button 
                      className='disabled:bg-gray-100 disabled:text-gray-400 disabled:border-gray-200 hover:border-[#2563EB] enabled:hover:border-2 w-8 h-8 flex items-center justify-center rounded-l-lg cursor-pointer border-l-[1px] border-t-[1px] border-b-[1px] border-gray-300'
                      btnText={'-'}
                      onClick={decrementQty}
                      isDisabled={quantity === 1 ? true : false}
                    />
                    <Input 
                      type='text'
                      className="h-8 w-9 p-1 text-center border-[1px] border-gray-300"
                      value={quantity}
                      onChange={() => setQuantity(quantity)}
                    />
                    <Button 
                      className='disabled:bg-gray-100 disabled:text-gray-400 hover:border-[#2563EB] hover:border-2 w-8 h-8 flex items-center justify-center rounded-r-lg cursor-pointer border-r-[1px] border-t-[1px] border-b-[1px] border-gray-300'
                      btnText={'+'}
                      onClick={incrementQty}
                      isDisabled={quantity === 99 ? true : false}
                    />
                  </div>
                </div>
              </div>
              <div className='col-span-3 lg:col-span-2'>
                <p>{ currencyFormat(+sub_total) }</p>
                <FaTrashAlt 
                  className='text-gray-500 cursor-pointer' 
                  onClick={deleteItem}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
