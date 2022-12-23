import React, { useState, useEffect } from 'react';
import axios from '../../config/AxiosClient';

import { Link } from 'react-router-dom';
import { Categories } from './categories';
import { PriceRange } from './priceRange';
import { Products } from './products';
import { SortBy } from './SortBy';
import { IProduct } from './products/types';

export const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([]);
  const [search, setSearch] = useState<string>('');

  const handleFetchProducts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/shop?q=${search}&brand=${selectedBrands}&category=${selectedCategories}&prices=${priceRange}`);

      setProducts(data.response.data);
    } catch(err: any) {
      const error = err.response.data.message;
      console.log(error);
    }
  };

  const handleSelectedCategories = (categories: number[]) => {
    setSelectedCategories([...categories]);
  };

  useEffect(() => {
    handleFetchProducts();
  }, [selectedCategories]);

  return (
    <div className='container mx-auto mt-4'>
      <div className='grid grid-cols-1 md:grid-cols-4'>
        <div className='p-4 order-2 md:order-1 flex flex-col h-min'> 
          <div className='flex justify-start text-sm'>
            <Link to='/'>Home</Link>
            <p className='mx-2'>/</p>
            <p className='text-gray-600'>Shop</p>
          </div>
          <Categories 
            handleSelectedCategories={handleSelectedCategories}
          />
          <PriceRange
            initalMin={1000}
            initalMax={10000}
            min={0}
            max={30000}
            step={100}
            priceCap={200}
          />
          <SortBy />
        </div>
        <div className='p-4 col-span-3 order-1 md:order-2 h-auto'>
          <div className='flex justify-start'>
            <p className='text-sm'>Showing 1-12 of 53 results</p>
          </div>
          {/* <Banner /> */}
          <Products
            products={products}
          />
        </div>
      </div>
    </div>
  );
};

export default Shop;
