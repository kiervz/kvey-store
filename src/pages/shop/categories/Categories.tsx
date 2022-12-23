import React, { useState, useEffect } from 'react';
import axios from '../../../config/AxiosClient';
import { Category } from './Category';
import { ICategory } from './types';

export interface CategoriesProps {
  handleSelectedCategories: (categories: number[]) => void;
}
export const Categories: React.FC<CategoriesProps> = ({ handleSelectedCategories }) => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get('/api/v1/category');
      setCategories(data.response);
    } catch(err: any) {
      const error = err.response.data.message;
      console.log(error);
    }
  };

  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newCategory: number[] = [];

    if (e.target.checked) {
      newCategory = selectedCategories;
      newCategory.push(Number(e.target.value));
      setSelectedCategories(newCategory);
    } else {
      newCategory = selectedCategories.filter((scat: number) => scat !== Number(e.target.value));
      setSelectedCategories(newCategory);
    }

    handleSelectedCategories(newCategory);
  };

  useEffect(() => {
    fetchCategories();
    console.log('Categories main');
  }, []);

  return (
    <div className='mt-4'>
      <h3 className='bg-[#212529] text-white py-1 px-2 text-sm font-semibold uppercase sm:py-2 sm:px-4 rounded-md'>Categories</h3>
      <ul>
        { categories != null && 
          categories.map((category: ICategory) => (
            <Category 
              {...category} 
              key={category.id} 
              handleSelectedCategory={handleCheckbox}
            />
          )) }
      </ul>
    </div>
  );
};
