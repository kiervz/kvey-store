import React from 'react';
import { Input } from '../../../components/common';
import { ICategory } from './types';

export const Category: React.FC<ICategory> = ({ id, slug, name, handleSelectedCategory }) => {
  return (
    <li className="flex w-100 items-center gap-2.5 px-3 py-1">
      <Input 
        type="checkbox" 
        id={slug} 
        value={id}
        className="bg-slate-100 border-slate-300 text-slate-900 focus:ring-slate-200"
        onChange={(e) => handleSelectedCategory(e)}
      />
      <label 
        htmlFor={slug} 
        className="w-max cursor-pointer text-sm sm:text-md"
      >
        { name }
      </label>
    </li>
  );
};
