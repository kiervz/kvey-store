import React, { useState } from 'react';
import { HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import UserIcon from '../assets/images/user.jpg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='text-slate-900 bg-white py-2 px-4 fixed top-0 w-full z-50 shadow-sm'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <p className='text-sm uppercase font-bold p-2'>
          <Link to='/'>Kvey Store</Link>
        </p>
        <ul className='flex justify-between gap-4 p-2'>
          <li>
            <Link to='/shop'>Shop</Link>
          </li>
          <li>
            <Link to='/brand'>Brand</Link>
          </li>
        </ul>
        <ul className='flex justify-between gap-4 items-center'>
          <li className='text-xl p-2 text-black cursor-pointer hover:bg-gray-200 hover:rounded-full hover:p-2 hover:text-slate-900 relative'>
            <HiOutlineHeart size={24} />
            <div className='bg-blue-500 rounded-full absolute -top-1 -right-3 text-sm w-5 flex justify-center items-center text-white'>
              <p className='mx-auto'>0</p>
            </div>
          </li>
          <li className='text-xl p-2 text-black cursor-pointer hover:bg-gray-200 hover:rounded-full hover:p-2 hover:text-slate-900 relative'>
            <HiOutlineShoppingBag size={24} />
            <div className='bg-blue-500 rounded-full absolute -top-1 -right-3 text-sm w-5 flex justify-center items-center text-white'>
              <p className='mx-auto'>0</p>
            </div>
          </li>
          <li className='cursor-pointer relative'>
            <img 
              className='w-8 h-8 object-cover rounded-full border-2 border-slate-400 hover:border-slate-900 focus:border-slate-900'
              src={UserIcon} 
              onClick={() => setIsOpen(!isOpen)}
              alt='user icon'
            />
            <div className={`${!isOpen && 'hidden'} bg-white py-2 rounded-lg mt-2 absolute right-0 w-48 shadow-inner`}>
              <p className='text-sm text-slate-900 py-2 px-3 hover:bg-slate-700 hover:text-gray-100'>Account Settings</p>
              <p className='text-sm text-slate-900 py-2 px-3 hover:bg-slate-700 hover:text-gray-100'>Logout</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};
