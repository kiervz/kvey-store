import React, { useState } from 'react';
import { Button } from '../../../components/common';
import axios from '../../../config/AxiosClient';

export const Checkout = () => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post('/api/v1/checkout');
      window.location.replace(data);
    } catch (err: any) {
      const error = err.response?.data?.message;
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Button 
        type='submit'
        className='bg-[#020a0f] text-white py-2 rounded-xl enabled:hover:bg-[#212529] disabled:bg-[#6F7275] duration-300 w-[100%]'
        btnText={'Checkout'}
        loading={isLoading}
        onClick={handleCheckout}
      />
    </>
  );
};
