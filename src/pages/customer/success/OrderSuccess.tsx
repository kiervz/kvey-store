import React, { useEffect, useState } from 'react';
import axios from '../../../config/AxiosClient';
import { useDispatch } from 'react-redux';
import { cartAction } from '../../../redux/features/cart/cartSlice';
import { FaCheckCircle } from 'react-icons/fa';

export const OrderSuccess = () => {
  const dispatch = useDispatch();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const params = new URLSearchParams(window.location.search);
  const session_id = params.get('session_id');

  const checkoutSuccess = async () => {
    try {
      const { data } = await axios.post(`/api/v1/checkout/success?session_id=${session_id}`);
      
      if (data?.success === true) {
        setIsSuccess(true);
        dispatch(cartAction.setCart(data.response.data));
      }
    } catch (err: any) {
      const error = err.response?.data?.message;
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkoutSuccess();
  }, []);
  
  return (
    <div className=' flex justify-center items-center'>
      {isLoading ? 'Loading...' : (
        isSuccess ?
          <div className='flex justify-center items-center flex-col py-10'>
            <FaCheckCircle className='mb-2 text-green-600 text-6xl' />
            <p className='text-4xl'>Thank you.</p>
            <p className='text-xl'>Your order was completed successfully.</p>
          </div>
          :
          <div>Payment Unsuccessful.</div>
      )}
    </div>
  );
};

export default OrderSuccess;