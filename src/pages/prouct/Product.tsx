import React, { useEffect, useState } from 'react';
import axios from '../../config/AxiosClient';

import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Button } from '../../components/common';
import { currencyFormat, notifyUser, truncate } from '../../utility';
import { IProduct } from '../shop/products/types';
import { ProductSlider } from './ProductSlider';
import { cartAction } from '../../redux/features/cart/cartSlice';


export const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState<IProduct>();
  const [isReadMore, setIsReadMore] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [qty, setQty] = useState<number>(1);

  const fetchCarts = async () => {
    try {
      const { data } = await axios.get(`/api/v1/shop/${params.slug}`);

      setProduct(data.response);
    } catch (err: any) {
      const error = err.response?.data?.message;
      console.log(error);
    }
  };

  const handleAddToCart = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('/api/v1/cart', {
        product_id: product?.id,
        qty: qty
      });
      dispatch(cartAction.setCart(data.response.data));
      notifyUser('success', data.message);
    } catch(err: any) {
      const error = err.response?.data?.message;
      console.log(error);
      if (err.response.status === 401) {
        notifyUser('error', 'Please login first to add to cart.');
      }
    } finally { setIsLoading(false); }
  };

  const handlerOnBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(e.target.value) <= 0) {
      setQty(1);
    } else {
      setQty(Number(e.target.value));
    }
  };

  useEffect(() => {
    fetchCarts();
  }, []);

  return (
    <>
      { product 
      && <div className='py-5 container mx-auto'>
        <div className='grid mb-5'>
          <section>
            <div className="relative max-w-screen-xl px-4 py-8 mx-auto">
              <div className="grid items-start grid-cols-1 gap-8 md:grid-cols-2">
                <div className="grid grid-cols-1 gap-4">
                  <ProductSlider 
                    productImages={product.productImages}
                  />
                </div>

                <div className="sticky top-0">
                  <div className="flex justify-between mt-8">
                    <div className=" max-w-md">
                      <h1 className="text-2xl font-bold">
                        {product?.name}
                      </h1>

                      <p className="mt-0.5 text-sm">Highest Rated Product</p>

                      <div className="mt-2 -ml-0.5 flex">
                        <svg
                          className="w-5 h-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="w-5 h-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="w-5 h-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="w-5 h-5 text-yellow-400"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>

                        <svg
                          className="w-5 h-5 text-gray-200"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                          />
                        </svg>
                      </div>
                    </div>

                    <p className="text-lg font-bold">{ currencyFormat(+product.actual_price) }</p>
                  </div>

                  <div className='mt-4'>
                    <div className="overflow-ellipsis">
                      <p>
                        { truncate(product.description, (isReadMore ? 10000 : 400)) }
                      </p>
                    </div>

                    <span 
                      className="mt-4 text-sm font-medium underline cursor-pointer"
                      onClick={() => setIsReadMore(!isReadMore)}
                    >
                      { isReadMore ? 'Read Less' : 'Read More' }
                    </span>
                  </div>
                  <div className='mt-8'>
                    <div className="mb-1 flex">
                      <p className='text-sm font-medium'>Category: </p>
                      <p className='text-sm ml-2'>{ product.category.name }</p>
                    </div>
                    <div className="mb-1 flex">
                      <p className='text-sm font-medium'>Brand: </p>
                      <p className='text-sm ml-2'>{ product.brand.name }</p>
                    </div>
                    <div className="mb-1 flex">
                      <p className='text-sm font-medium'>SKU: </p>
                      <p className='text-sm ml-2'>{ product.sku }</p>
                    </div>
                    <div className="mb-1 flex">
                      <p className='text-sm font-medium'>Stock: </p>
                      <p className='text-sm ml-2'>{ product.stock }</p>
                    </div>
                  </div>
                  <form className="mt-8">
                    <fieldset className="mt-4">
                      <legend className="mb-1 text-sm font-medium">Size</legend>

                      <div className="flow-root">
                        <div className="-m-0.5 flex flex-wrap">
                          <label htmlFor="size_xs" className="cursor-pointer p-0.5">
                            <input
                              type="radio"
                              name="size"
                              id="size_xs"
                              className="sr-only peer"
                              value={'XS'}
                            />

                            <span
                              className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                            >
                                XS
                            </span>
                          </label>

                          <label htmlFor="size_s" className="cursor-pointer p-0.5">
                            <input
                              type="radio"
                              name="size"
                              id="size_s"
                              className="sr-only peer"
                              value={'S'}
                            />

                            <span
                              className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                            >
                              S
                            </span>
                          </label>

                          <label htmlFor="size_m" className="cursor-pointer p-0.5">
                            <input
                              type="radio"
                              name="size"
                              id="size_m"
                              className="sr-only peer"
                              value={'M'}
                            />

                            <span
                              className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                            >
                              M
                            </span>
                          </label>

                          <label htmlFor="size_l" className="cursor-pointer p-0.5">
                            <input
                              type="radio"
                              name="size"
                              id="size_l"
                              className="sr-only peer"
                              value={'L'}
                            />

                            <span
                              className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                            >
                              L
                            </span>
                          </label>

                          <label htmlFor="size_xl" className="cursor-pointer p-0.5">
                            <input
                              type="radio"
                              name="size"
                              id="size_xl"
                              className="sr-only peer"
                              value={'XL'}
                            />

                            <span
                              className="inline-flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full group peer-checked:bg-black peer-checked:text-white"
                            >
                              XL
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="flex w-full h-12 mt-8 gap-2">
                      <input 
                        type="number" 
                        min={1}
                        max={99}
                        defaultValue={qty}
                        onBlur={handlerOnBlur}
                        className="w-auto text-center p-2 text-base bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                      />
                      <Button 
                        className='px-3 py-2 text-center bg-[#212529] text-white hover:bg-[#424649] w-full rounded-md text-md md:text-md md:font-semibold disabled:bg-[#999FA4] disabled:text-[#F5F5F5]'
                        btnText={'Add to cart'}
                        loading={isLoading}
                        onClick={handleAddToCart}
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>}
    </>
  );
};

export default Product;