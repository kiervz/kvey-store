import React from 'react';
import { checkImage } from '../../../constants';
import { ICategories } from './types';

export const Category = ({ category }: ICategories) => {
  return (
    <li className="flex w-100 items-center gap-2.5 px-3 py-1">
      <input type="checkbox" id={category.slug} className={`cursor-pointer peer relative h-5 w-5 shrink-0 appearance-none rounded-sm border after:absolute after:left-0 after:top-0 after:h-full after:w-full after:bg-[url(${checkImage})] after:bg-[length:40px] after:bg-center after:bg-no-repeat after:content-[''] checked:bg-slate-900 hover:ring hover:ring-gray-300 focus:outline-none`} />
      <label htmlFor={category.slug} className="w-max cursor-pointer text-sm sm:text-md">{ category.name }</label>
    </li>
  );
};