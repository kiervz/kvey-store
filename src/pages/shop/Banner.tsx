import React from 'react';
import BannerImage from '../../assets/images/banner.jpg';

export const Banner = () => {
  return (
    <div className='flex justify-center'>
      <div className='w-full sm:h-32 md:h-[250px] relative'>
        <img 
          className='object-cover w-full sm:h-32 md:h-[250px] rounded-md' 
          src={BannerImage} 
          alt='banner'
        />
        <div className='bg-slate-900 absolute inset-0 bg-opacity-50 rounded-md'></div>
        <p className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-md sm:text-xl md:2xl'>Banner Text</p>
        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-md sm:text-xl md:2xl text-center w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
};
