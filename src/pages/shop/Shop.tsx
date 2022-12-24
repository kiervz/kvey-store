import React, { useState, useEffect } from 'react';
import axios from '../../config/AxiosClient';

import { Link } from 'react-router-dom';
import { Categories } from './categories';
import { PriceRange } from './priceRange';
import { Products } from './products';
import { SortBy } from './SortBy';
import { IProduct } from './products/types';
import { Button } from '../../components/common';
import { removeDuplicatesById } from '../../utility';

export interface metaProps {
  page: number;
  path: string;
  perPage: number;
  total: number;
  totalPages: number;
}

export const Shop = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [meta, setMeta] = useState<metaProps>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [fromLoadMore, setFromLoadMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [selectedCategories, setSelectedCategories] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 10000]);
  
  const [selectedBrands, setSelectedBrands] = useState<number[]>([]);
  const [search, setSearch] = useState<string>('');

  const handleFetchProducts = async () => { 
    setIsLoading(true);
    try {
      const { data } = await axios.get(`/api/v1/shop?page=${currentPage}&q=${search}&brand=${selectedBrands}&category=${selectedCategories}&price[0]=${priceRange[0]}&price[1]=${priceRange[1]}`);

      if (fromLoadMore) {
        setProducts(prev => [...prev, ...data.response.data]);
      } else {
        setProducts(data.response.data);
      }

      setMeta(data.response.meta);
    } catch(err: any) {
      const error = err.response.data.message;
      console.log(error);
    } finally {
      setFromLoadMore(false);
      setIsLoading(false);
    }
  };

  const handleSelectedCategories = (categories: number[]) => {
    setSelectedCategories([...categories]);
    setCurrentPage(1);
  };

  const handlePriceRange = (priceRange: number[]) => {
    setPriceRange([...priceRange]);
    setCurrentPage(1);
  };

  const handleLoadMore = () => {
    if (Number(meta?.page) < Number(meta?.totalPages)) {
      setCurrentPage(prev => prev + 1);
      setFromLoadMore(true);
    }
  };

  useEffect(() => {
    handleFetchProducts();
  }, [selectedCategories, priceRange, currentPage]);

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
            initalMin={0}
            initalMax={10000}
            min={0}
            max={30000}
            step={100}
            priceCap={200}
            handlePriceRange={handlePriceRange}
          />
          <SortBy />
        </div>
        <div className='p-4 col-span-3 order-1 md:order-2 h-auto'>
          <div className='flex justify-start'>
            <p className='text-sm'>              
              Showing {meta?.page}-{meta?.totalPages} of {meta?.total} results
            </p>
          </div>
          {/* <Banner /> */}
          <Products
            products={removeDuplicatesById(products)}
          />
          <div className='flex justify-center pt-8'>
            { !isLoading && <>
              { currentPage !== meta?.totalPages 
                && 
                <Button 
                  className='content-between bg-transparent hover:bg-[#212529] text-[#212529] font-semibold hover:text-white py-2 px-4 border border-[#212529] hover:border-transparent rounded disabled:bg-[#999FA4] disabled:text-[#F5F5F5] disabled:border-[#999FA4] disabled:cursor-not-allowed'
                  btnText={isLoading ? 'Loading...' : 'Load More'}
                  isDisabled={isLoading}
                  onClick={handleLoadMore}
                /> }
            </> }
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
