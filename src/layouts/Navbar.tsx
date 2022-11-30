import React, { useState } from 'react';
import { FaHeart, FaShoppingBag } from 'react-icons/fa';
import UserIcon from '../assets/images/user.jpg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='bg-slate-900 text-white py-2 px-4 fixed top-0 w-full z-50'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <p className='text-sm uppercase font-bold p-2'>Kvey Store</p>
        <ul className='flex justify-between gap-4 p-2'>
          <li>Shop</li>
          <li>Brand</li>
          <li>Shop</li>
        </ul>
        <ul className='flex justify-between gap-4 items-center'>
          <li className='text-xl p-2 cursor-pointer hover:bg-slate-700 hover:rounded-full hover:p-2 hover:text-gray-200'>
            <FaHeart />
          </li>
          <li className='text-xl p-2 cursor-pointer hover:bg-slate-700 hover:rounded-full hover:p-2 hover:text-gray-200 relative'>
            <FaShoppingBag />
            <div className='bg-red-500 rounded-full absolute -top-1 -right-3 text-sm w-5 flex justify-center items-center'>
              <p className='mx-auto'>12</p>
            </div>
          </li>
          <li className='cursor-pointer relative'>
            <img 
              className='w-8 h-8 object-cover rounded-full border-2 border-slate-500 hover:border-gray-300 focus:border-gray-300'
              src={UserIcon} 
              onClick={() => setIsOpen(!isOpen)}
              alt='user icon'
            />
            <div className={`${!isOpen && 'hidden'} bg-white py-2 rounded-lg mt-2 absolute right-0 w-48 shadow-xl`}>
              <p className='text-sm text-slate-900 py-2 px-3 hover:bg-slate-700 hover:text-gray-100'>Account Settings</p>
              <p className='text-sm text-slate-900 py-2 px-3 hover:bg-slate-700 hover:text-gray-100'>Logout</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
