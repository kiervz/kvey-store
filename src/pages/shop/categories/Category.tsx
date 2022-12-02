import React from 'react';
import { ICategory } from './types';

export const Category: React.FC<ICategory> = ({ slug, name}) => {
  return (
    <li className="flex w-100 items-center gap-2.5 px-3 py-1">
      <input 
        type="checkbox" 
        id={slug} 
        className="bg-slate-100 border-slate-300 text-slate-900 focus:ring-slate-200"
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
