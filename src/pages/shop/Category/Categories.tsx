import React, { useState, useEffect } from 'react';
import axios from '../../../config/AxiosClient';
import { Category } from './Category';
import { ICategory } from './types';

export const Categories = () => {
  const [categories, setCategories] = useState<[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get('/api/v1/category');
      setCategories(data.response);
    } catch(err: any) {
      const error = err.response.data.message;
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  
  return (
    <div className='mt-4'>
      <h3 className='bg-slate-900 text-white my-1 py-1 px-2 text-md font-semibold uppercase sm:my-1 sm:py-2 sm:px-4 rounded-md'>Mens Shoes</h3>
      <ul>
        { categories != null && 
          categories.map((category: ICategory) => (
            <Category key={category.id} category={category} />
          )) }
      </ul>
    </div>
  );
};
