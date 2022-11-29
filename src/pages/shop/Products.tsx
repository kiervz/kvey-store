import React from 'react';
import { Button } from '../../components/common';

export const Products = () => {
  return (
    <div className="relative group">
      <a href="https://kierveymaghanoy.com">
        <div className="w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img 
            src="https://kvey-images.s3.ap-southeast-1.amazonaws.com/images/2901660974434.jpg" 
            alt="alt image" 
            className="h-full w-full object-cover object-center aspect-square" 
          />
        </div>
        <div className="mt-2">
          <h3 className="text-md text-gray-700">
            <span aria-hidden="true" className="absolute inset-0"></span>
                    Basic Tee 1
          </h3>
          <p className="mt-1 text-sm text-gray-700">₱ 1,902.40</p>
        </div>
      </a>
      <Button 
        className='px-3 py-2 text-center bg-gray-200 text-gray-700 w-full rounded-md text-sm md:text-md md:font-semibold mt-2'
        btnText={'Add to cart'}
      />
    </div>
  );
};
