import React, { useState } from 'react';
import axios from '../../../config/AxiosClient';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/common';
import { currencyFormat, notifyUser } from '../../../utility';
import { IProduct } from './types';
import { cartAction } from '../../../redux/features/cart/cartSlice';
import { useDispatch } from 'react-redux';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const Product: React.FC<IProduct> = ({ id, name, slug, unit_price, actual_price, discount, productImages, other }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleAddToCart = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('/api/v1/cart', {
        product_id: id,
        qty: 1
      });
      dispatch(cartAction.setCart(data.response.data));
      notifyUser('success', data.message);
    } catch(err: any) {
      const error = err.response?.data?.message;
      console.log(error);
      if (err.response.status === 401) {
        notifyUser('error', 'Please login first to add to cart.');
      }
    } finally { setIsLoading(false); }
  };
  
  return (
    <div className="flex flex-col">
      <Link to={`/product/${slug}`} className='group'>
        <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <LazyLoadImage 
            src={productImages[0].url} 
            alt="alt image" 
            className="h-full w-full object-cover object-center aspect-square" 
          />
        </div>
        <div className="mt-2">
          <h3 className="text-sm text-gray-900">
            <span className="absolute"></span>
            {name}
          </h3>
          <div className='flex justify-between gap-2 items-center'>
            <p className="mt-1 text-sm text-gray-900">{currencyFormat(actual_price)}</p>
            { discount > 0 &&
            <div className='flex items-center gap-2'>
              <p className="text-sm text-gray-600 line-through">{currencyFormat(unit_price)}</p>
              <p className="text-sm text-gray-900">{`-${currencyFormat(discount, '', 0)}%`}</p>
            </div> }
          </div>
        </div>
      </Link>
      <Button 
        className='px-3 py-2 text-center bg-[#212529] text-white hover:bg-[#424649] w-full rounded-md text-md md:text-md md:font-semibold mt-2 disabled:bg-[#999FA4] disabled:text-[#F5F5F5]'
        btnText={'Add to cart'}
        loading={isLoading}
        onClick={handleAddToCart}
      />
    </div>
  );
};
