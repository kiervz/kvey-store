import React from 'react';
import { Radio } from '../../components/common';

const selectSorts = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'high-low', label: 'Price: High to Low' },
  { value: 'low-high', label: 'Price: Low to High' },
  { value: 'latest-arrival', label: 'Latest Arrival' },
];
  
export const SortBy = () => {
  const onSelectedRadio = (selected: string) => {
    console.log(selected);
  };
  
  return (
    <div className='mt-4'>
      <h3 className='bg-[#212529] text-white my-1 py-1 px-2 text-sm font-semibold uppercase sm:my-1 sm:py-2 sm:px-4 rounded-md'>Sort By</h3>
      <Radio 
        data={selectSorts}
        onSelected={onSelectedRadio}
      />
    </div>
  );
};
