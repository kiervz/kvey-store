import React, { useState } from 'react';
import { HiOutlineHeart, HiOutlineShoppingBag } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserIcon from '../assets/images/user.jpg';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userSlice = useSelector((state: any) => state.user.user);
  const cartSlice = useSelector((state: any) => state.cart);
  
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className='text-slate-900 bg-white py-2 px-4 fixed top-0 w-full z-30 shadow-sm'>
      <div className='container mx-auto px-4 flex justify-between items-center'>
        <p className='text-sm uppercase font-bold p-2'>
          <Link to='/'>Kvey Store</Link>
        </p>
        <ul className='flex justify-between gap-4 p-2'>
          <li className='hidden sm:block'>
            <Link to='/shop'>Shop</Link>
          </li>
          <li className='hidden sm:block'>
            <Link to='/brand'>Brand</Link>
          </li>
        </ul>
        <ul className='flex justify-between gap-4 items-center'>
          
          <Link 
            to='/wish-list'
          >
            <li className='hidden sm:block text-xl p-2 text-black cursor-pointer hover:bg-gray-200 hover:rounded-full hover:p-2 hover:text-slate-900 relative'>
              <HiOutlineHeart size={24} />
              <div className='bg-blue-500 rounded-full absolute -top-1 -right-1 text-sm w-5 flex justify-center items-center text-white'>
                <p className='mx-auto'>0</p>
              </div>
            </li>
          </Link>
          <Link 
            to='/cart'
          >
            <li className='text-xl p-2 text-black cursor-pointer hover:bg-gray-200 hover:rounded-full hover:p-2 hover:text-slate-900 relative'>
              <HiOutlineShoppingBag size={24} />
              <div className='bg-blue-500 rounded-full absolute -top-1 -right-1 text-sm w-5 flex justify-center items-center text-white'>
                <p className='mx-auto'>{ cartSlice.totalCartItems }</p>
              </div>
            </li>
          </Link>
          <li className='cursor-pointer relative'>
            <img 
              className='w-8 h-8 object-cover rounded-full border-2 focus:border-slate-900 '
              src={UserIcon} 
              onClick={() => setIsOpen(!isOpen)}
              alt='user icon'
            />
            <div className={`${!isOpen && 'hidden'} bg-white py-2 rounded-lg mt-2 absolute right-0 w-48 shadow-xl border`}>
              { userSlice?.token != '' ? 
                <>
                  <Link 
                    to='/settings'
                    className='text-sm text-slate-900 py-2 px-3 hover:bg-gray-200 block'
                    onClick={handleClick}
                  >
                    Account Settings
                  </Link>
                  <Link 
                    to='/logout'
                    className='text-sm text-slate-900 py-2 px-3 hover:bg-gray-200 block'
                    onClick={handleClick}
                  >
                    Logout
                  </Link>
                </>
                : 
                <>
                  <Link 
                    to='/login'
                    className='text-sm text-slate-900 py-2 px-3 hover:bg-gray-200 block' 
                    onClick={handleClick}
                  >
                    Login
                  </Link>
                  <Link 
                    to='/register'
                    className='text-sm text-slate-900 py-2 px-3 hover:bg-gray-200 block' 
                    onClick={handleClick}
                  >
                    Register
                  </Link>
                </> }
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;