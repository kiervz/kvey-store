import React, { useState, useEffect, useRef } from 'react';
import { Input } from '../../../components/common';
import { PriceRange as PriceRangeProps } from './types';

export const PriceRange: React.FC<PriceRangeProps> = ({ 
  initalMin, 
  initalMax, 
  min, 
  max, 
  step, 
  priceCap,
  handlePriceRange
}) => {
  const progressRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  const [minValue, setMinValue] = useState<number>(initalMin);
  const [maxValue, setMaxValue] = useState<number>(initalMax);

  const [isReleased, setIsReleased] = useState<boolean>(false);

  const handleMin = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (((maxValue - minValue) >= priceCap) && maxValue <= max) {
      if (Number(e.target.value) < Number(maxValue)) {
        setMinValue(Number(e.target.value));
      } 
    } else {
      if (Number(e.target.value) < minValue) {
        setMinValue(Number(e.target.value));
      }
    }
  };
  
  const handleMax = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (((maxValue - minValue) >= priceCap) && maxValue <= max) {
      if (Number(e.target.value) > Number(minValue)) {
        setMaxValue(Number(e.target.value));
      } 
    } else {
      if (Number(e.target.value) > maxValue) {
        setMaxValue(Number(e.target.value));
      }
    }
  };

  useEffect(() => {
    progressRef.current.style.left = (minValue / max) * 100 + '%';
    progressRef.current.style.right = step - (maxValue / max) * step + '%';
  }, [minValue, maxValue]);

  useEffect(() => {
    if (isReleased) {
      handlePriceRange([minValue, maxValue]);
    }
    setIsReleased(false);
  }, [isReleased]);

  return (
    <div className='mt-4'>
      <h3 className='bg-[#212529] text-white my-1 py-1 px-2 text-sm font-semibold uppercase sm:my-1 sm:py-2 sm:px-4 rounded-md'>Price Range</h3>
      <div className='mt-4'>
        <div className='slider relative h-1 rounded-md bg-gray-300'>
          <div 
            className='progress absolute h-1 bg-blue-500 rounded' 
            ref={progressRef}>
          </div>
        </div>
        <div className='range-input relative'>
          <Input 
            type='range'
            value={minValue}
            onChange={handleMin}
            onMouseUp={() => setIsReleased(true)}
            min={min}
            step={step}
            max={max}
            className='range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none cursor-grab active:cursor-grabbing'
          />
          <Input 
            type='range'
            value={maxValue}
            onChange={handleMax}
            onMouseUp={() => setIsReleased(true)}
            min={min}
            step={step}
            max={max}
            className='range-min absolute w-full -top-1 h-1 bg-transparent appearance-none pointer-events-none cursor-grab active:cursor-grabbing'
          />
        </div>
      </div>
      <div className='flex justify-between text-center mt-4 w-full'>
        <Input 
          type='number' 
          className='bg-gray-100 border border-gray-300 text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block cursor-not-allowed w-24'
          disabled={true}
          value={minValue}
          placeholder='Min Price'
        />
        <Input 
          type='number' 
          className='bg-gray-100 border border-gray-300 text-gray-900 text-sm text-center rounded-lg focus:ring-blue-500 focus:border-blue-500 block cursor-not-allowed w-24'
          disabled={true}
          value={maxValue}
          placeholder='Max Price'
        />
      </div>
    </div>
  );
};
