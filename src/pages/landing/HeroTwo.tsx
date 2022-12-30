import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';

import image1 from '../../assets/images/landing/image1.jpg';
import image2 from '../../assets/images/landing/image2.jpg';
import image3 from '../../assets/images/landing/image3.jpg';
import image4 from '../../assets/images/landing/image4.jpg';
import image5 from '../../assets/images/landing/image5.jpg';
import image6 from '../../assets/images/landing/image6.jpg';

export const HeroTwo = () => {
  return (
    <div className="relative overflow-hidden bg-slate-800 h-[80vh]">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="hidden sm:block pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl mt-10"
          >
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-72 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                    <img
                      src={image1}
                      alt="image1"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-72 overflow-hidden rounded-lg">
                    <img
                      src={image2}
                      alt="image2"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-72 overflow-hidden rounded-lg">
                    <img
                      src={image3}
                      alt="image3"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="h-64 w-72 overflow-hidden rounded-lg">
                    <img
                      src={image6}
                      alt="image4"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-72 overflow-hidden rounded-lg">
                    <img
                      src={image5}
                      alt="image5"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="h-64 w-72 overflow-hidden rounded-lg">
                    <img
                      src={image4}
                      alt="image5"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sm:max-w-lg">
            <h1 className="font text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Limited time only: 50% off select products
            </h1>
            <Link
              to="/shop"
              className="text-white text-xl flex justify-between items-center mt-20 w-max"
            > Shop the sale 
              <HiArrowRight className='ml-2' />
            </Link>
            <div className='mt-20 grid grid-cols-2 gap-8'>
              <div className='grid-cols-1'>
                <p className='text-3xl sm:text-5xl text-white'>
                ₱ 270 <span className='bg-white px-1 py-1 text-black'>OFF</span>
                </p>
                <p className='mt-5 text-white text-md'>ON ORDERS OF ₱1,800+</p>
              </div>
              <div className='grid-cols-1'>
                <p className='text-3xl sm:text-5xl text-white'>
                ₱ 430 <span className='bg-white max-h-min px-1 py-1 text-black'>OFF</span>
                </p>
                <p className='mt-5 text-white text-md'>ON ORDERS OF ₱2,500+</p>
              </div>
              <div className='grid-cols-1'>
                <p className='text-xl sm:text-2xl text-center bg-white px-1 py-1 text-black'>
                  CODE: <span className='font-semibold'>KVEYSTORE</span>
                </p>
              </div>
              <div className='grid-cols-1'>
                <p className='text-xl sm:text-2xl text-center bg-white px-1 py-1 text-black'>
                  CODE: <span className='font-semibold'>PHSALE</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
