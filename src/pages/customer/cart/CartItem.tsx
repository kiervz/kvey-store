import React, { useState } from 'react';
import axios from '../../../config/AxiosClient';

import { Cart } from '../../../redux/features/cart/types';
import { FaTrashAlt } from 'react-icons/fa';
import { currencyFormat } from '../../../utility/DisplayHelpler';
import { Input } from '../../../components/common';

export const Counter = () => {
  return (
    <div className="flex items-center justify-center w-min">
      <div className="flex">
        <div className="text-black font-bold w-8 h-8 flex items-center justify-center rounded-l-lg cursor-pointer border-l-[1px] border-t-[1px] border-b-[1px] border-gray-400">
          -
        </div>
        <div className="w-8 flex items-center justify-center border-[1px] border-gray-400">
          1
        </div>
        <div className="text-black font-bold w-8 h-8 flex items-center justify-center rounded-r-lg cursor-pointer border-r-[1px] border-t-[1px] border-b-[1px] border-gray-400">
          +
        </div>
      </div>
    </div>
  );
};


export const CartItem: React.FC<Cart> = ({ id, name, slug, brand, price, qty, sub_total, selected, image }) => {  
  const [isCheck, setIsCheck] = useState<boolean>(Boolean(selected));
  
  const handleCheckbox = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const { data } = await axios.put('/api/v1/cart/select', {
        cart_id: e.target.value,
        is_selected: Number(!!e.target.checked)
      });

      setIsCheck(!!e.target.checked);
    } catch (err: any) {
      const error = err.response?.data?.message;
      console.log(error);
    }
  };

  return (
    <>
      <div className='w-[100%] h-auto pr-4 mt-4 mb-4'>
        <div className="grid grid-cols-12 pl-5">
          <div className='flex justify-center items-center gap-2 col-span-2 sm:col-span-2'>
            <Input 
              type="checkbox" 
              id={slug} 
              className="bg-slate-100 border-slate-300 text-slate-900 focus:ring-slate-200"
            />
            <img
              className="product_img h-24 w-16 lg:h-28 lg:w-24 object-cover"
              src={image}
              alt="product_img"
            />
          </div>
          <div className="flex items-start h-auto flex-col ml-5 col-span-10 sm:col-span-10">
            <p className='font-medium'>{name}</p>
            <div className='grid grid-cols-12 w-[100%]'>
              <div className='col-span-full lg:col-span-5'>
                <p>{brand}</p>
              </div>
              <div className='col-span-4 lg:col-span-2'>
                <p className='text-orange-600'>{ currencyFormat(+price) }</p>
                <p className='text-gray-500 line-through'>{ currencyFormat(+price) }</p>
              </div>
              <div className='col-span-5 lg:col-span-3'>
                <Counter />
              </div>
              <div className='col-span-3 lg:col-span-2'>
                <p>{ currencyFormat(+price) }</p>
                <FaTrashAlt className='text-gray-500 cursor-pointer' onClick={() => console.log(id)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
