import React, { useState } from 'react';
import { Cart } from '../../../redux/features/cart/types';
import { Input } from '../../../components/common';
import { FaTrashAlt } from 'react-icons/fa';
import axios from '../../../config/AxiosClient';
import { currencyFormat } from '../../../utility/DisplayHelpler';

export const Counter = () => {
  return (
    <div className="flex items-center justify-center">
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
      <div className='flex w-[100%] h-auto justify-between mobile:flex-col pr-4 mt-4 mb-4'>
        <div className="product flex pl-5 self-start">
          <img
            className="product_img h-20 w-16 object-cover"
            src={image}
            alt="product_img"
          />

          <div className="disc flex items-start h-auto flex-col ml-6">
            <p className='font-medium'>{name}</p>
            <p>{brand}</p>
          </div>
        </div>

        <div className='flex justify-center items-center self-start mobile:mt-7 mobile:mb-7'>
          <p className="flex flex-col justify-center pr-16">
            <b>{ currencyFormat(+price) }</b>
            <FaTrashAlt className='text-gray-500' />
          </p>
          <Counter />
        </div>
      </div>
    </>
  );
};
