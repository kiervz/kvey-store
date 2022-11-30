import React, { useState, useEffect } from 'react';
import axios from '../../../config/AxiosClient';
import { Category } from './Category';
import { ICategory } from './types';

export const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

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
      <h3 className='bg-gray-600 text-white py-1 px-2 text-sm font-semibold uppercase sm:py-2 sm:px-4 rounded-md'>Categories</h3>
      <ul>
        { categories != null && 
          categories.map((category: ICategory) => (
            <Category 
              {...category} 
              key={category.id} 
            />
          )) }
      </ul>
    </div>
  );
};
