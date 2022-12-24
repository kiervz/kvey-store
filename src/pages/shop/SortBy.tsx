import React from 'react';
import { Radio } from '../../components/common';
import { SELECT_SORTS } from '../../constants';

export interface sortByProps {
  onSelectedRadio: (selected: string) => void;
}

export const SortBy: React.FC<sortByProps> = ({ onSelectedRadio }) => {
  return (
    <div className='mt-4'>
      <h3 className='bg-[#212529] text-white my-1 py-1 px-2 text-sm font-semibold uppercase sm:my-1 sm:py-2 sm:px-4 rounded-md'>Sort By</h3>
      <Radio 
        data={SELECT_SORTS}
        onSelected={onSelectedRadio}
      />
    </div>
  );
};
